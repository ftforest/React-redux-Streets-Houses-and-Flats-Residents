import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {
    fetchStreets,
    getTree, ToggleHouses, NodeFlat,
    NodeHouse, NodeRoot,
    NodeStreet, fetchClients, getAllClientsByFlat, fetchClientsDelete, fetchClientAdd, getAddressId,
} from "./streetsSlice";
import {Spinner} from "../../components/Spinner";
import {urlDeleteResidentsByBindId} from "../../constants";

const StreetsTree = () => {
    const dispatch = useAppDispatch()

    let Tree:NodeRoot = useAppSelector(state => getTree(state))
    let clients = useAppSelector(state => getAllClientsByFlat(state))


    //console.log(Tree,'Tree')


    function ToggleHousesF(indexSt:any,indexHo:any) {
        //dispatch(houseToggle(indexSt,indexHo))
        console.log(indexSt, indexHo,'indexSt, indexHo')
        dispatch(ToggleHouses({ indexSt, indexHo }))
    }

    function ViewClients(indexSt:any,indexHo:any,idFlat:any,addressId:any) {
        console.log(indexSt, indexHo,idFlat,addressId,'indexSt:any,indexHo:any,idFlat:any,addressId:any')
        let id:any = addressId

        // @ts-ignore
        dispatch(fetchClients(id))
    }

    /*bindId: 58882

    id: 86698

    name: test6

    email: test6@mail.ru

    phone: +79276574466*/

    function DeleteClient(id:any,bindId:any) {
        console.log(id,'DeleteClient:id')
        console.log(bindId,'DeleteClient:bindId')
        console.log(urlDeleteResidentsByBindId,'DeleteClient:url')
        dispatch(fetchClientsDelete([id,bindId]))
    }

    const streetsStatus = useAppSelector(state => state.streets.status)
    console.log(streetsStatus,'streetsStatus')
    const error = useAppSelector(state => state.streets.error)
    useEffect(() => {
        if (streetsStatus === 'idle') {
            dispatch(fetchStreets())
        }
    }, [streetsStatus, dispatch])

    let content

    if (streetsStatus === 'loading') {
        content = <Spinner text="Loading..." />
    } else if (streetsStatus === 'succeeded') {

        content = Tree.streets.map((street:NodeStreet)=>{
            return (
                <li>
                    {street.index + ':' + street.id + ':' + street.name}
                    <ul>

                        {street.houses.map((house:NodeHouse) => {
                            return (
                                <li>
                                    <div className={"houseBtn"} onClick={(event)=>ToggleHousesF(street.index,house.index)}>
                                        { house.index + ':' + 'house # ' + house.id}
                                    </div>

                                    <ul>
                                        {house.viewFlat ? house.flats.map((flat:NodeFlat) => {
                                            return (
                                                <li>
                                                    <div className={"flatBtn"}
                                                         onClick={(event)=>
                                                             ViewClients(street.index,house.index,flat.id,flat.addressId)}
                                                    >
                                                        {  'flat # ' + flat.id + ' addressId: ' + flat.addressId}
                                                    </div>
                                                </li>
                                            )
                                        }) : ''}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </li>
            )
        })

    } else if (streetsStatus === 'failed') {
        content = <div>{error}</div>
    }




    /*
        bindId      :   58882
        email        :        "test6@mail.ru"
        id        :        86698
        name        :        "test6"
        phone        :        "+79276574466"
        */
    return (
        <div className="wrap">
            <div className="App" >
                <nav className="leftMenu">
                    <ul>
                        {content}
                    </ul>
                </nav>
                <main>
                    <AddClient />
                    <div className="wrapMain">
                        {clients.map((client:any) => {
                            return (
                                <div className="cartClient">
                                    <div className="wrapCart">
                                        <button onClick={()=>DeleteClient(client.id,client.bindId)}>Delete</button>
                                        <p>bindId: {client.bindId}</p>
                                        <p>id: {client.id}</p>
                                        <p>name: {client.name}</p>
                                        <p>email: {client.email}</p>
                                        <p>phone: {client.phone}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </main>
            </div>
        </div>

    )
};

export default StreetsTree;

function AddClient(props:any) {


    let addressId = useAppSelector(state => getAddressId(state))

    const dispatch = useAppDispatch()

    console.log(urlDeleteResidentsByBindId,'DeleteClient:url')


    const handleFormSubmit = (e:any) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const  formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj,'formDataObj')

        dispatch(fetchClientAdd({
            client: {
                Name: formDataObj.name,
                Phone: formDataObj.phone,
                Email: formDataObj.email,
            },
            addressId: addressId
        }))



    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="Name"/><br/>
            <input type="text" name="email" placeholder="Email"/><br/>
            <input type="text" name="phone" placeholder="Phone"/><br/>
            <button type={"submit"}>Add Client</button>
            <span>После добавления Client нажмите на ту же Flat cтем же номером</span>
        </form>
    )
}

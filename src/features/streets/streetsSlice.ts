import {createAsyncThunk, createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {client} from "../../api/client";
import {
    urlDeleteResidentsByBindId,
    urlGetResidentsByAddressId,
    urlGetStreetById,
    urlGetStreets,
    urlPostResidentsAdd, urlPutResidentsInFlat
} from "../../constants";


export interface NodeState {
    clients: any[],
    accounts: any[],
    addressId: number,
    streetId: number,
    houseId: number,
    streetName: string,
    building: string,
    corpus?: string,
    flat: string
}

const address: NodeState[] = [
    /*{
        "clients": [],
        "accounts": [
            {
                "bindId": 15061,
                "account": "ТЕСТ-1",
                "type": {
                    "id": 1,
                    "name": "ЖКУ"
                }
            },
            {
                "bindId": 13680,
                "account": "12345r66878798",
                "type": {
                    "id": 4,
                    "name": "Паркинг"
                }
            }
        ],
        "addressId": 191513,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "1"
    },
    {
        "clients": [],
        "accounts": [
            {
                "bindId": 15062,
                "account": "ТЕСТ-2",
                "type": {
                    "id": 1,
                    "name": "ЖКУ"
                }
            },
            {
                "bindId": 15117,
                "account": "456765567l7",
                "type": {
                    "id": 2,
                    "name": "Домофон"
                }
            },
            {
                "bindId": 15111,
                "account": "Тест Тв",
                "type": {
                    "id": 3,
                    "name": "ТВ"
                }
            }
        ],
        "addressId": 191514,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "2"
    },
    {
        "clients": [],
        "accounts": [
            {
                "bindId": 15064,
                "account": "ТЕСТ-4",
                "type": {
                    "id": 1,
                    "name": "ЖКУ"
                }
            }
        ],
        "addressId": 191516,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "4"
    },
    {
        "clients": [],
        "accounts": [
            {
                "bindId": 17524,
                "account": "123123123123123",
                "type": {
                    "id": 2,
                    "name": "Домофон"
                }
            }
        ],
        "addressId": 191517,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "5"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191518,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "6"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191519,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "7"
    },
    {
        "clients": [],
        "accounts": [
            {
                "bindId": 13791,
                "account": "333",
                "type": {
                    "id": 2,
                    "name": "Домофон"
                }
            },
            {
                "bindId": 13789,
                "account": "22222222",
                "type": {
                    "id": 4,
                    "name": "Паркинг"
                }
            },
            {
                "bindId": 13792,
                "account": "444",
                "type": {
                    "id": 5,
                    "name": "Кладовая"
                }
            }
        ],
        "addressId": 191520,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "8"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191521,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "9"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191523,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "11"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191524,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "12"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191525,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "13"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191526,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "14"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191527,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "15"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191528,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "16"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191529,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "17"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191530,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "18"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191531,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "19"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191532,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "20"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191533,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "21"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191535,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "23"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191536,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "24"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191537,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "25"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191538,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "26"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191539,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "27"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191540,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "28"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191541,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "29"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191542,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "30"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191543,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "31"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191544,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "32"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191545,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "33"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191546,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "34"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191547,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "35"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191548,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "36"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191549,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "37"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191550,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "38"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191551,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "39"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191552,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "40"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191553,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "41"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191554,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "42"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191555,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "43"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191556,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "44"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191557,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "45"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191558,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "46"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191559,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "47"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191560,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "48"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191561,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "49"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191562,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "50"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191563,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "51"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191564,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "52"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191565,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "53"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191566,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "54"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191567,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "55"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191568,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "56"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191571,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "59"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191572,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "60"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191573,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "61"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191574,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "62"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191575,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "63"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191576,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "64"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191577,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "65"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191578,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "66"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191579,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "67"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191580,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "68"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191581,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "69"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191582,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "70"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191583,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "71"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191584,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "72"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1986950,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "10а"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1986951,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "10б"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2134792,
        "streetId": 281,
        "houseId": 764,
        "streetName": "Демонстрационная",
        "building": "1",
        "flat": "паркинг"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324868,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "1"
    },
    {
        "clients": [],
        "accounts": [
            {
                "bindId": 14964,
                "account": "123456789998",
                "type": {
                    "id": 3,
                    "name": "ТВ"
                }
            },
            {
                "bindId": 14965,
                "account": "888888888888888",
                "type": {
                    "id": 3,
                    "name": "ТВ"
                }
            }
        ],
        "addressId": 1324869,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "2"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324870,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "3"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324871,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "4"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324872,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "5"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324873,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "6"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324874,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "7"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324875,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "8"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324876,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "9"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324877,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "10"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324878,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "11"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324879,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "12"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324880,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "13"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324881,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "14"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 1324882,
        "streetId": 281,
        "houseId": 16487,
        "streetName": "Демонстрационная",
        "building": "15",
        "flat": "15"
    },
    {
        "clients": [],
        "accounts": [
            {
                "bindId": 21370,
                "account": "TT12345",
                "type": {
                    "id": 1,
                    "name": "ЖКУ"
                }
            }
        ],
        "addressId": 191587,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "1"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191588,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "2"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191589,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "3"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191590,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "4"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191591,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "5"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191592,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "6"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191593,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "7"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191594,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "8"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191595,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "9"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191596,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "10"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191597,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "11"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191598,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "12"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191599,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "13"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191600,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "14"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191601,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "15"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191602,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "16"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191603,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "17"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191604,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "18"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191605,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "19"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191606,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "20"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191607,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "21"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191608,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "22"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191609,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "23"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191610,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "24"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191611,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "25"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191612,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "26"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191613,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "27"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191614,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "28"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191615,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "29"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191616,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "30"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191617,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "31"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191618,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "32"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191619,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "33"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191620,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "34"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191621,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "35"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191622,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "36"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2122075,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "оф. 1"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2122076,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "оф. 2"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2122077,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "оф. 3"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2122078,
        "streetId": 281,
        "houseId": 765,
        "streetName": "Демонстрационная",
        "building": "2",
        "flat": "оф. 4"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191625,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "1"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191626,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "2"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191627,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "3"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191628,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "4"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191629,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "5"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191630,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "6"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191631,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "7"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191632,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "8"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191633,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "9"
    },
    {
        "clients": [],
        "accounts": [
            {
                "bindId": 20976,
                "account": "Тест",
                "type": {
                    "id": 5,
                    "name": "Кладовая"
                }
            }
        ],
        "addressId": 191634,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "10"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191635,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "11"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191636,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "12"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191637,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "13"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191638,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "14"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191639,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "15"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191640,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "16"
    },
    {
        "clients": [],
        "accounts": [
            {
                "bindId": 17535,
                "account": "40359110968",
                "type": {
                    "id": 1,
                    "name": "ЖКУ"
                }
            }
        ],
        "addressId": 191641,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "17"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191642,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "18"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191643,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "19"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191644,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "20"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191645,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "21"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191646,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "22"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191647,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "23"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191648,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "24"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191649,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "25"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191650,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "26"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191651,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "27"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191652,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "28"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191653,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "29"
    },
    {
        "clients": [],
        "accounts": [
            {
                "bindId": 3,
                "account": "15",
                "type": {
                    "id": 1,
                    "name": "ЖКУ"
                }
            },
            {
                "bindId": 6,
                "account": "11",
                "type": {
                    "id": 2,
                    "name": "Домофон"
                }
            },
            {
                "bindId": 7,
                "account": "ТВ-12321333",
                "type": {
                    "id": 3,
                    "name": "ТВ"
                }
            },
            {
                "bindId": 13812,
                "account": "12",
                "type": {
                    "id": 5,
                    "name": "Кладовая"
                }
            }
        ],
        "addressId": 191654,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "30"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191655,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "31"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191656,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "32"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191657,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "33"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191658,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "34"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191659,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "35"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 191660,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "36"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2122079,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "оф. 1"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2122080,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "оф. 2"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2122081,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "оф. 3"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2122082,
        "streetId": 281,
        "houseId": 766,
        "streetName": "Демонстрационная",
        "building": "2",
        "corpus": "1",
        "flat": "оф. 4"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217768,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "1"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217769,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "2"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217770,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "3"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217771,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "4"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217772,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "5"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217773,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "6"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217774,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "7"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217775,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "8"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217776,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "9"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217777,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "10"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217778,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "11"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217779,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "12"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217780,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "13"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217781,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "14"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217782,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "15"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217783,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "16"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217784,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "17"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217785,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "18"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217786,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "19"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217787,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "20"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217788,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "21"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217789,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "22"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217790,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "23"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217791,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "24"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217792,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "25"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217793,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "26"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217794,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "27"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217795,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "28"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217796,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "29"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217797,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "30"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217798,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "31"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217799,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "32"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217800,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "33"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217801,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "34"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217802,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "35"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217803,
        "streetId": 281,
        "houseId": 979,
        "streetName": "Демонстрационная",
        "building": "3",
        "flat": "36"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217805,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "1"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217806,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "2"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217807,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "3"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217808,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "4"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217809,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "5"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217810,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "6"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217811,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "7"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217812,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "8"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217813,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "9"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217814,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "10"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217815,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "11"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217816,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "12"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217817,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "13"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217818,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "14"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217819,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "15"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217820,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "16"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217821,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "17"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217822,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "18"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217823,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "19"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217824,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "20"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217825,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "21"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217826,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "22"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217827,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "23"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217828,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "24"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217829,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "25"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217830,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "26"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217831,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "27"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217832,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "28"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217833,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "29"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217834,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "30"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217835,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "31"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217836,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "32"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217837,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "33"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217838,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "34"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217839,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "35"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2217840,
        "streetId": 281,
        "houseId": 980,
        "streetName": "Демонстрационная",
        "building": "4",
        "flat": "36"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2219794,
        "streetId": 281,
        "houseId": 18891,
        "streetName": "Демонстрационная",
        "building": "Не трогать",
        "flat": "1"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2219795,
        "streetId": 281,
        "houseId": 18891,
        "streetName": "Демонстрационная",
        "building": "Не трогать",
        "flat": "2"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2219796,
        "streetId": 281,
        "houseId": 18891,
        "streetName": "Демонстрационная",
        "building": "Не трогать",
        "flat": "3"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2219797,
        "streetId": 281,
        "houseId": 18891,
        "streetName": "Демонстрационная",
        "building": "Не трогать",
        "flat": "4"
    },
    {
        "clients": [],
        "accounts": [],
        "addressId": 2219798,
        "streetId": 281,
        "houseId": 18891,
        "streetName": "Демонстрационная",
        "building": "Не трогать",
        "flat": "5"
    }*/
]

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    //const response = await client.get('/fakeApi/posts')
    //return response.data
})

export interface  initStreetsState {
// Multiple possible status enum values
    address:NodeState[];
    streets:any[];
    tree:NodeRoot;
    clientsCurrent:NodeClient[];
    addressIdCurrent: any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    refresh: boolean;
}

const initialState:initStreetsState = {
    address:[],
    streets:[
        /*{
            "id": 281,
            "prefix": {
                "id": 2,
                "name": "ул",
                "shortName": "ул"
            },
            "name": "Демонстрационная",
            "cityId": 1,
            "city": "Тюмень",
            "nameWithPrefix": "Демонстрационная, ул"
        },
        {
            "id": 2446,
            "prefix": {
                "id": 2,
                "name": "ул",
                "shortName": "ул"
            },
            "name": "Тестовая",
            "cityId": 1,
            "city": "Тюмень",
            "nameWithPrefix": "Тестовая, ул"
        }*/
    ],
    tree:{
        id:'0',
        streets:[],
        houses:[],
        flats:[],
        parentId:''
    },
    clientsCurrent:[],
    addressIdCurrent:'',
    status: 'idle',
    error: null,
    refresh: true,
}

export const fetchStreets = createAsyncThunk('streets/fetchStreets', async () => {
    const streets:any = await client(urlGetStreets,  'GET')
    console.log(streets,'response:'+urlGetStreets)
    const allStreets = []
    for (const street of streets) {
        try {
            const response = await client(urlGetStreetById+street.id, 'GET');
            allStreets.push(response);
        } catch (error) {
            console.error(error);
        }
    }
    console.log([streets,allStreets],'[streets,allStreets]')
    let tree = generateTree(streets,allStreets)
    return [streets,allStreets,tree]
})

export const fetchClients =
    createAsyncThunk('streets/fetchClients', async (addressId,thunkAPI) => {
        const clients: any = await client(urlGetResidentsByAddressId + addressId, 'GET')
        console.log(clients, 'response:' + urlGetResidentsByAddressId + addressId)
        return [addressId,clients]
    })
export const fetchClientsDelete =
    createAsyncThunk('streets/fetchClientsDelete', async (ids:any[],thunkAPI) => {
        let id = ids[0]
        let bindId = ids[1]

        const clients: any = await client(urlDeleteResidentsByBindId + bindId, 'DELETE')
        console.log(clients, 'response:' + urlDeleteResidentsByBindId + bindId)
        return [id,clients]
    })

export const fetchClientAdd =
    createAsyncThunk('streets/fetchClientAdd', async (params:any,thunkAPI) => {
        let clientNewData = params

        /*{
            "id": 86839,
            "result": "Ok"
        }*/
        let clientsId:any
        try {
            clientsId = await client(urlPostResidentsAdd, 'POST',clientNewData.client)
        } catch (error) {
            console.error(error);
        }
        console.log(clientsId.id, 'response:' + urlPostResidentsAdd)
        try {
            const res: any = await client(urlPutResidentsInFlat, 'PUT',{
                "AddressId": clientNewData.addressId,
                "ClientId": clientsId.id
            })
        } catch (error) {
            console.error(error);
        }
        return clientsId.id
    })


const addresesSlice = createSlice({
    name: 'streets',
    initialState,
    reducers: {
        ToggleHouses(state, action) {
            const { indexSt,indexHo } = action.payload

            console.log(state.tree.streets[indexSt].houses[indexHo].viewFlat,'Tree.streets[indexSt].houses[indexHo].viewFlat')

            let view:boolean = state.tree.streets[indexSt].houses[indexHo].viewFlat
            state.tree.streets[indexSt].houses[indexHo].viewFlat = !view

            /*const existingPost = state.posts.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }*/
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchStreets.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchStreets.fulfilled, (state, action:any) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.streets = action.payload[0]
                state.address = action.payload[1]
                state.tree = action.payload[2]

            })
            .addCase(fetchStreets.rejected, (state:any, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchClients.fulfilled, (state, action) => {
                state.clientsCurrent = action.payload[1]
                state.addressIdCurrent = action.payload[0]
            })
            .addCase(fetchClientsDelete.fulfilled, (state, action) => {
                state.clientsCurrent = state.clientsCurrent.filter((el:any) => el.id != action.payload[0])
            })
            .addCase(fetchClientAdd.fulfilled, (state, action) => {
                state.refresh = action.payload ? true : false
            })
    }
})

export const { ToggleHouses } = addresesSlice.actions

export default addresesSlice.reducer

export const getAddressId = (state:any) => state.streets.addressIdCurrent
export const getTree = (state:any) => state.streets.tree
export const selectAllStreets = (state:any) => state.streets.streets

export const  getAllAddress = (state:any) => state.streets.address
export const  getAllClientsByFlat = (state:any) =>
    Array.isArray(state.streets.clientsCurrent) ? state.streets.clientsCurrent : []
export const  generateTree = (streetsAll:any,treeAll:any) => {

    let viewHouses = false

    let Tree:NodeRoot = {
        id:'0',
        streets:[],
        houses:[],
        flats:[],
        parentId:''
    }

    /*{
        addressId: 0,
        streetId: 0,
        houseId: 0,
        streetName: 'root',
        flat: '0'
    }*/

    /*let streetsAll = state.streets.streets
    let treeAll = state.streets.address*/
    // Streets Add Tree
    streetsAll.map((el:any,idx:number) => {
        let item:NodeStreet = {
            index: idx,
            id: el.id,
            name: el.name,
            houses: [],
            parentId: '0'
        }
        Tree.streets.push(item)
    })
    // Houses Add Tree
    treeAll.forEach((arr:any,idx:any) => {
        let idx2 = 0
            arr.map((address:any) => {
            let itemSt = Tree.streets.filter((el:any) => address.streetId == el.id )
            if (itemSt.length > 0) {

                let index = Tree.streets.findIndex((el:any) => address.streetId == el.id)
                let itemHo = {
                    index: idx2,
                    id:address.houseId,
                    flats:[],
                    viewFlat: viewHouses,
                    parentId:Tree.streets[index].id,
                }
                if (Tree.houses.filter((el:any) => el.id == address.houseId).length == 0){
                    Tree.streets[index].houses.push(itemHo)
                    Tree.houses.push(itemHo)
                    idx2++
                }
            }
        })
    })
    // Flats Add Tree
    treeAll.forEach((arr:any,idx:any) => {

        arr.map((address:any) => {
            let itemHo = Tree.houses.filter((el:any) => address.houseId == el.id )
            if (itemHo.length > 0) {
                let indexSt = Tree.streets.findIndex((el:any) => address.streetId == el.id)
                let indexHo = Tree.streets[indexSt].houses.findIndex((el: any) => address.houseId == el.id)

                let itemFl = {
                    index:0,
                    id: address.flat,
                    addressId:address.addressId,
                    clients: [],
                    parentId: Tree.streets[indexSt].houses[indexHo].id,
                }
                Tree.flats.push(itemFl)
                Tree.streets[indexSt].houses[indexHo].flats.push(itemFl)
            }
        })
    })

    return Tree
}

export type NodeRoot = {
    id:string
    streets:NodeStreet[]
    houses:NodeHouse[]
    flats:NodeFlat[]
    parentId:string
}

export type NodeStreet = {
    index:number
    id:string
    name:string
    houses:NodeHouse[]
    parentId:string
}
export type NodeHouse = {
    index:number
    id:string
    flats:NodeFlat[]
    viewFlat: boolean
    parentId:string
}
export type NodeFlat = {
    index:number
    addressId:string
    id:string
    clients:NodeClient[]
    parentId:string
}
export type NodeClient = {
    index:number
    id:string
    info:any
    parentId:string
}

/*
export const selectPostById = (state:any, postId:any) =>
    state.posts.posts.find((post:PostsState) => post.id === postId)*/

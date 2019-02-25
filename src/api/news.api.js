//import axios from "axios";
import ENdata from '../data/dataEN.json';
import FAdata from '../data/dataFA.json';


export default class Api {

    static getNews = async (lang) => {
        if(lang == "fa"){
            return FAdata;
        }
        else if( lang == "en"){
            return ENdata;
        }
       
    }
}
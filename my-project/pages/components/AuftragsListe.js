import Auftrag from "./Auftrag";
import Kalkulation from "./Kalkulation";
import React, {useState} from "react";
import styles from './AuftragsListe.module.css'
import Bestaetigung from "./Bestaetigung";
import Produktion from "./Produktion";
import Abschluss from "./Abschluss";
import styles2 from './Auftrag.module.css'
import data from "./MOCK_DATA.json";


export default function AuftragsListe() {

    return (
            <div className="flex justify-between">

                {/*Titel von Säule und Auftragsliste*/}
                <div className="block pl-2. pr-1">
                    <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Kalkulation</h1>
                    <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                        <div className={styles.columnTest}>
                        <Kalkulation />
                        </div>
                    </div>
                </div>

                {/*Titel von Säule und Auftragsliste*/}
                <div className="block pl-1 pr-1">
                    <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Bestätigung</h1>
                    <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                        <div className={styles.columnTest}>
                            <Bestaetigung />
                        </div>
                    </div>
                </div>

                {/*Titel von Säule und Auftragsliste*/}
                <div className="block pl-1 pr-1">
                    <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Produktion</h1>
                    <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                        <div className={styles.columnTest}>
                            <Produktion />
                        </div>
                    </div>
                </div>

                {/*Titel von Säule und Auftragsliste*/}
                <div className="block pl-1 pr-2">
                    <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Abschluss</h1>
                    <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                        <div className={styles.columnTest}>
                            <Abschluss />
                        </div>
                    </div>
                </div>

            </div>
    )
}
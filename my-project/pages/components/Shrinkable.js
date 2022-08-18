import {motion} from 'framer-motion';
import styles3 from "./AuftragsListe.module.css";
import styles2 from "./Auftrag.module.css";
import React, {useState} from "react";
import data from "./MOCK_DATA.json";

export default function Shrinkable({ data, titel }) {
    const [isOpen, setIsOpen] = useState(false);
    {/* Filtered List für Kalkulationsphase */}
    return (
        <div layout className="block pl-1 pr-1">
            <motion.div onClick={() => setIsOpen(!isOpen)}
                        className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md text-xs text-center hover:drop-shadow-xl hover:cursor-pointer"
                        layout="position"
                        transition={{layout: {duration: 0.5}}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
            >

                    {(!isOpen) ? (
                        <div className={styles3.columnTestShrinked}>
                            <div className="justify-center text-center">
                                <h1 className="text-2xl font-semibold text-indigo-600 pb-2 rotate-180 justify-center flex">{titel}</h1>
                            </div>
                        </div>
                    ) : (
                        <div className="justify-center text-center">
                            <h1 className="text-2xl font-semibold text-indigo-600 pb-2 rotate-180 justify-center flex"></h1>
                        </div>
                    )}

                    {isOpen && (
                        <motion.div>
                            <div className={styles3.columnTest}>
                                <ul role="list" className="space-y-2 block justify-center">
                                    {data.map((auftrag) => (
                                        <div className={styles2.case}>
                                            <li key={auftrag.id}
                                                className="bg-white shadow-md overflow-hidden px-1 py-3 sm:px-4 sm:rounded-md text-xs">
                                                {/* Content */}
                                                <div className={styles2.fntSize}>
                                                    <div className="flex justify-between">
                                                        <div>
                                                            <div>Auftrag</div>
                                                            <div>CM</div>
                                                            <div>Patient</div>
                                                            {(auftrag.producer != "") ?
                                                                <div>Producer</div> : ""
                                                            }

                                                        </div>
                                                        <div>
                                                            <div className="pl-4">{auftrag.caseNr}</div>
                                                            <div className="pl-4">{auftrag.caseManager}</div>
                                                            <div className="pl-4">{auftrag.patient}</div>
                                                            {(auftrag.producer != "") ?
                                                                <div className="pl-4">{auftrag.producer}</div> : ""
                                                            }
                                                        </div>
                                                        <div className="inline-flex">
                                                            {(auftrag.status == "Bearbeitbar") ? <span
                                                                className='w-3 h-3 rounded-full bg-green-700'
                                                                aria-hidden="true"
                                                            /> : ""}
                                                        </div>
                                                        <div className="inline-flex">
                                                            {(auftrag.status == "In Bearbeitung") ? <span
                                                                className='w-3 h-3 rounded-full bg-orange-500'
                                                                aria-hidden="true"
                                                            /> : ""}
                                                        </div>
                                                        <div className="inline-flex">
                                                            {(auftrag.status == "Freigeben") ? <span
                                                                className='w-3 h-3 rounded-full bg-yellow-500'
                                                                aria-hidden="true"
                                                            /> : ""}
                                                        </div>
                                                        <div className="inline-flex">
                                                            {(auftrag.status == "NC") ? <span
                                                                className='w-3 h-3 rounded-full bg-red-700'
                                                                aria-hidden="true"
                                                            /> : ""}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
            </motion.div>
        </div>

    );
}
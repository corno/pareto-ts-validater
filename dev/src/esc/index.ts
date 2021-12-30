import * as pr from "pareto-runtime"
import * as gtaImp from "generate-typesafe-ast"
import { dataGrammar } from "../data/dataGrammar"
import { interfaceGrammar } from "../data/interfaceGrammar"
import { typeGrammar } from "../data/typeGrammar"
import * as fp from "fountain-pen"


fp.createContext(
    pr.trimRight,
).configure(
    {
        newline: "\r\n",
        indentation: "    ",
        trimLines: true,
    },
    ($i) => {

        gtaImp.generateCode(
            {
                grammar: dataGrammar,
                targetDirPath: "pub/src/modules/dataParser"
            },
            {
                writeContext: $i,
                onError: ($) => {
                    console.error($)
                }
            }
            
        )
        gtaImp.generateCode(
            {
                grammar: interfaceGrammar,
                targetDirPath: "pub/src/modules/interfaceParser"
            },
            {
                writeContext: $i,
                onError: ($) => {
                    console.error($)
                }
            }
            
        )
        gtaImp.generateCode(
            {
                grammar: typeGrammar,
                targetDirPath: "pub/src/modules/typeParser"
            },
            {
                writeContext: $i,
                onError: ($) => {
                    console.error($)
                }
            }
            
        )

    }
)
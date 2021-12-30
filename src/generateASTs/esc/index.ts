import * as pr from "pareto-runtime"
import * as gtaImp from "generate-typesafe-ast/esc/implementations"
import { dataGrammar } from "../data/dataGrammar"
import { interfaceGrammar } from "../data/interfaceGrammar"
import { typeGrammar } from "../data/typeGrammar"
import * as fp from "fountain-pen/esc/implementations/fountain-pen"


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
            $i,
            dataGrammar,
            "src/dataGrammar"
        )

        gtaImp.generateCode(
            $i,
            interfaceGrammar,
            "src/interfaceGrammar"
        )

        gtaImp.generateCode(
            $i,
            typeGrammar,
            "src/typeGrammar"
        )
    }
)
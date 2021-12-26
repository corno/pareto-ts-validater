import * as gtaImp from "generate-typesafe-ast/esc/implementations"
import { dataGrammar } from "../data/dataGrammar"
import { interfaceGrammar } from "../data/interfaceGrammar"
import { typeGrammar } from "../data/typeGrammar"

gtaImp.generateCode(
    dataGrammar,
    "src/dataGrammar/esc"
)

gtaImp.generateCode(
    interfaceGrammar,
    "src/interfaceGrammar/esc"
)

gtaImp.generateCode(
    typeGrammar,
    "src/typeGrammar/esc"
)
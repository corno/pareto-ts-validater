import * as gtaImp from "generate-typesafe-ast/esc/implementations"
import { dataGrammar } from "./dataGrammar"

gtaImp.generateCode(
    dataGrammar,
    "src/generatedASTs/esc"
)
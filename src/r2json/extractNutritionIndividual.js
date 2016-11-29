var fs = require("fs");

export default function convert(rOutFile, jsonOutFile) {
    /*
        "country", "landscape", "zlen", "zwei", "zwfl"
     */
    var Converter = require("csvtojson").Converter;
    var converter = new Converter({});

    converter.on("end_parsed", function (jsonArray)
    {
        console.log(jsonArray);
        var outfile = jsonOutFile || "nutrition-individual.json";
        fs.createWriteStream(outFile);

    });

//read from file
    fs.createReadStream(rOutFile).pipe(converter);
}
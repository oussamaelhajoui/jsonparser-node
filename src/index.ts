const fs = require("fs").promises;
import path from "path";


// Importing interface models
import gameData from './data';
import customGameData from './customData';

// directory to read from
const directoryPath = path.join(__dirname, 'heroes');

const allFilesRead = fs.readdir(directoryPath);

let itterator = 1;

allFilesRead.then( (files:any) => {
    files.forEach(function (file:any) {
        setTimeout( () => {

            // Do whatever you want to do with the file
            console.log(file);
            const readUnCleanJson = fs.readFile(path.join(directoryPath,file),"utf8");

            // Cleaning the data by removing first 2 words from every object and writing the cleaned data afterwords.
            const cleanData = readUnCleanJson.then(  (data:any) => {
                return new Promise( res => {
                    let dataPreFormatted = JSON.stringify(data, null, 4);
                    const regex:RegExp = new RegExp("(?:[a-zA-Z0-9\\<\\>]+ ){2}","gim");
                    const formattedData = JSON.parse(dataPreFormatted.replace(regex, ''));
                    (async () => { await fs.writeFile(`./newData${itterator}.json`,formattedData); res(formattedData);})();

                })
            })
                .catch( (err:any) => {
                    console.log(err);
                    console.log(`could not open raw file...`);
                    process.exit();
                });

            // Reading the file created with the clean data
            const cleanFile = cleanData.then( () => {
                return fs.readFile(`./newData${itterator}.json`, "utf8");
            })
                .catch( (err:any)=> {
                    console.log(err);
                    console.log("cant read cleaned file...");
                    process.exit();
                });

            // Creating custom object with necessary data needed for database. and writing that file.
            cleanFile.then(async (data:string) => {
                console.log("itterator", itterator);
                // Parsing the data
                const jsonData:gameData = JSON.parse(data);

                // Mapping the data
                // You can change the order of the json file by just changing the order below.
                const customData: customGameData = {
                    Name: jsonData.Base.Name,
                    m_Name: jsonData.Base.Name,
                    LongName: jsonData.Base.LongName,
                    Gender: jsonData.Base.Gender,
                    startingRank: jsonData.Base.StartingRank,
                    startingLevel: jsonData.Base.StartingLevel,
                    DefaultArmorId: jsonData.Base.DefaultArmorId,
                    DefaultAccessoryId: jsonData.Base.DefaultArmorId,
                    DefaultWeaponId: jsonData.Base.DefaultWeaponId,
                    Rarity: jsonData.Base.Rarity,
                    _class: jsonData.Base._class,
                    IsRecruitable: jsonData.Base.IsRecruitable,
                    IsUnlockedByDefault: jsonData.Base.IsUnlockedByDefault,
                    IsSecret: jsonData.Base.IsSecret,
                    IsInMetaEvent: jsonData.Base.IsInMetaEvent,
                    VillaStats: {...jsonData.Base.VillaStats.Array.map(data => data.data)},
                    RankProgression: { ...jsonData.Base.RankProgression.Array.map(data => data.data)},
                    RoleAffinities: {_serializedMainKeyRole: jsonData.Base._keyRoleAffinities._serializedMainKeyRole, _serializedKeyRoleAffinities: jsonData.Base._keyRoleAffinities._serializedKeyRoleAffinities.Array.map(data => data.data)},
                    AccessoriesAllowed: jsonData.Base.AccessoriesAllowed,
                    ArmorAllowed: jsonData.Base.ArmorAllowed,
                    WeaponsAllowed: jsonData.Base.WeaponsAllowed,
                    stats: {...jsonData.Base.Stats.Array[0].data},
                    SkillsIds: {...jsonData.Base.SkillsIds.Array.map(data => data.data)},
                    PerksIds: {...jsonData.Base.PerksIds.Array.map(data => data.data)},
                    RoleTextKeys: {...jsonData.Base.RoleTextKeys.Array.map(data=>data.data)}
                };

                // Writing the data
                const fileWritten = await fs.writeFile(`./customData${itterator}.json`,JSON.stringify(customData, null, 4));
                console.log(fileWritten);
                console.log(`custom data written ${itterator}.`);
                itterator += 1;


            })
                .catch( (err:any) => {
                    console.log(err);
                    console.log("could not write custom data...");
                    process.exit();
                });

        },1000)
    });



})
.catch( (err:any)=> {
    console.log(err);
    process.exit();
});



/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,eyecolor,shirttype,bling,background,rarity,datecreated) {
    const NFT = {
        "name": name,
        "eyecolor": eyecolor,
        "shirt_type" : shirttype,
        "bling" : bling,
        "background" : background,
        "rarity": rarity,
        "date_created" : datecreated
    };

    NFTs.push(NFT);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTs.length; i++){
        console.log((i+1)+" value is stored with following data ");
        console.log(NFTs[i]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTs.length);
}

// call your functions below this line
mintNFT("Exo","Blue","Aromer","Diamond Ring","City","Legendery","10-12-1998");
mintNFT("Jash","Brown","Stripes","Gold hand","Forest","Rare","06-10-1999");
mintNFT("Speedy","Black","Archery","Silver Ring","Waterfall","Rare","15-11-2000");
mintNFT("Jack","Green","Tech Suit","Diamond teeth","Forets","Rare","30-01-2001");
mintNFT("Harish","Yellow","Swards suit","Silver-Gold neckles","City","Legendery","15-12-2001");
mintNFT("Tender","Red","Bold","Diamond Ring","Legendery","City","24-09-2002");
mintNFT("Plates","Bluish-green","Armor","Silver braslets","Waterfall","Legendery","09-12-2003");
mintNFT("Foxy","Reddish","Archery","Gold Chain","Forest","Legendery","01-12-2004");

listNFTs();
getTotalSupply();

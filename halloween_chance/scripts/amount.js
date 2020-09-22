
function getAmount(){
    var amount = Math.floor(Math.random() * 10) + 1
    var quoteT = new Array(10);
    quoteT[0] =  "Double, double toil and trouble; Fire burn and caldron bubble.";
    quoteT[1] = "It’s Halloween, everyone’s entitled to one good scare.";
    quoteT[2] = "A person should always choose a costume which is in direct contrast to her own personality";
    quoteT[3] = "Be afraid ... Be very afraid.";
    quoteT[4] = "I would like, if I may, to take you on a strange journey.";
    quoteT[5] = "Magic is really very simple, all you’ve got to do is want something and then let yourself have it.";
    quoteT[6] = "Villainy wears many masks, none so dangerous as the mask of virtue.";
    quoteT[7] =  "I’ve seen enough horror movies to know that any weirdo wearing a mask is never friendly.";
    quoteT[8] = "Do you believe in destiny? That even the powers of time can be altered for a single purpose? That the luckiest man who walks on this earth is the one who finds ... true love?";
    quoteT[9] = "I’m a homicidal maniac, they look just like everyone else.";
    var n = quoteT[amount-1];
    var authorT = new Array(10);
    authorT[0] =  "– From Shakespeare’s Macbeth";
    authorT[1] = "– Brackett, Halloween (1978)";
    authorT[2] = "– Lucy Van Pelt, It's the Great Pumpkin, Charlie Brown (1966)";
    authorT[3] = "– Ronnie, The Fly (1986)";
    authorT[4] = "– The Criminologist, The Rocky Horror Picture Show (1975)";
    authorT[5] = "– Aggie Cromwell, Halloweentown (1998)";
    authorT[6] = "– Ichabod Crane, Sleepy Hollow (1999)";
    authorT[7] =  "– Elizabeth, Friday the 13th Part VI: Jason Lives (1986)";
    authorT[8] = "– Dracula (1992)";
    authorT[9] = "– Wednesday, The Addams Family (1991)";
    var x = authorT[amount-1];
    document.getElementById("amount").innerHTML=""+[amount]+"";
    document.getElementById("quote").innerHTML = n;
    document.getElementById("author").innerHTML = x;
}
getAmount();


function p2par()
{
    var twoputs=[];
    for(var i = 1; i<=6; i++)
    {
        twoputs.push(document.getElementById("p2s"+ i).value);
    }
        twoputs.join(". ");
        document.getElementById("sp2").innerHTML= twoputs.join(". ");
}
function p1par()
{
    var oneputs=[];
    for(var i = 1; i<=6; i++)
    {
        oneputs.push(document.getElementById("p1s"+ i).value);
    }
        oneputs.join(". ");
        document.getElementById("sp1").innerHTML= oneputs.join(". ");
}

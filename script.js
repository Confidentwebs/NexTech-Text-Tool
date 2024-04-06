function copyLink() {
    var outputLink = document.getElementById("outputLink");
    outputLink.select();
    document.execCommand("copy");
    alert("Link copied to clipboard!");
}
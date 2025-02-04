export function getEmValue(id: string) {
    var div = document.getElementById(id);
    if (!div) return 0;
    div.style.height = "1em";
    return div.offsetHeight;
}

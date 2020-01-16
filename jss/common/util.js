import {Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window');
export function getPixel(num,designWidth=375){
    return num*width/designWidth;
}
export function money(s, n) {  

    n = n > 0 && n <= 20 ? n : 2;  

    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  

    var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];  

    t = "";  

    for (i = 0; i < l.length; i++) {  

        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  

    }  

    var mone = t.split("").reverse().join("") + "." + r;

    return t.split("").reverse().join("") + "." + r;  

}
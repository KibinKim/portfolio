import Store from "redux/Store";
////
export const store = Store();

export function device_check() {
    // 디바이스 종류 설정
    let pc_device = "win16|win32|win64|mac|macintel";

    // 접속한 디바이스 환경
    let this_device = navigator.platform;

    if (this_device) {
        if (pc_device.indexOf(navigator.platform.toLowerCase()) < 0) {
            return "MOBILE";
        } else {
            return "PC";
        }
    }
}

export const URL_FRONT = process.env.REACT_APP_URL_FRONT; //수정금지
export const URL = process.env.REACT_APP_URL;

import axios from 'axios';
/** 네이버 어플리케이션 클라이언트 ID */
const naverClientID = process.env.NAVER_CLIENT_ID;
/** 네이버 어플리케이션 Secret Key */
const naverSecretKey = process.env.NAVER_SECRET_KEY;

/** 위경도 객체 타입 */
export interface IPosition {
    /** 위도 */
    lat: number;
    /** 경도 */
    lng: number;
}

export interface IMapInitArgs {
    /** 지도를 렌더링할 div id */
    mapId?: string;
    /** 현재 lat*/
    currentLat?: number;
    /** 현재 lon*/
    currentLon?: number;
}

export const getMarker = ({ position }: { position: IPosition }) => {
    const latLng = new naver.maps.LatLng(position.lat, position.lng);

    // 마커
    const marker = new naver.maps.Marker({
        position: latLng,
        cursor: 'pointer',
    });

    return { marker };
};

export const mapInit = async ({ mapId, currentLat, currentLon }: IMapInitArgs) => {
    const maps = (window as any).naver.maps as typeof naver.maps;

    const latLng = new maps.LatLng(currentLat, currentLon);

    // 맵 옵션
    const mapOpt: naver.maps.MapOptions = {
        zoomControlOptions: {
            style: maps.ZoomControlStyle.SMALL,
            position: maps.Position.TOP_RIGHT,
        },
        zoomControl: true,
        center: latLng,
        zoom: 16,
    };
    // 맵 생성
    let map = null;

    try {
        map = new maps.Map(mapId ?? 'map', mapOpt);
    } catch (error) {
        console.log(error);
    }

    const { marker } = getMarker({
        position: { lat: currentLat, lng: currentLon },
    });

    /**
     * 마커 옮기기
     */
    naver.maps.Event.addListener(map, 'click', (e) => {
        marker.setPosition(e.coord);

        console.log('🚀 ~ file: mapUtil.tsx:72 ~ naver.maps.Event.addListener ~ e.coord', e.coord.x);
    });

    return {
        initialMap: map,
        marker,
    };
};

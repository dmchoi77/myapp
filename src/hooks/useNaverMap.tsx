import { useEffect, useState } from 'react';
import { mapInit } from '../utils/mapUtil';

/** useNaverMap props */
interface IProps {
    /** map 을 렌더링할 div id */
    mapId?: string;
}

/** 출발/도착 지점 정보 인터페이스 */
export interface ILocationInfo {
    /** 마커 */
    marker: naver.maps.Marker;
}

/** 출발/도착 정보 기본값 */
const defaultLocationInfo: ILocationInfo = { marker: null };

/** map 바인딩 초기화 - custom hooks */
export const useNaverMap = ({
    mapId,
}: IProps): {
    map: naver.maps.Map;
    startInfo: ILocationInfo;
} => {
    /** 지도 상태 */
    const [map, setMap] = useState<naver.maps.Map>(null);
    const [startInfo, setStartInfo] = useState<ILocationInfo>(defaultLocationInfo);

    /**
     * 네이버 지도/지도, 시작 지점 상태 초기화 함수
     * mapInit 과 이하의 setState의 순서만 보장되면 됨
     */
    const initializeMap = async () => {
        const { initialMap, marker } = await mapInit({
            mapId,
            currentLon: 127.105399,
            currentLat: 37.3595704,
        });

        console.log(marker);
        setMap(initialMap);
        setStartInfo({ marker });
    };

    /** useEffect */

    /** naver map api script 로드 및
     * 지도, 시작 지점 상태 초기화
     */
    useEffect(() => {
        initializeMap();

        /** 컴포넌트 언마운트 시 loadjs 의존성 초기화 및
      네이버맵 인스턴스 제거 */
        return () => {
            map?.destroy();
        };
    }, []);

    /** useEffect */

    return { map, startInfo };
};

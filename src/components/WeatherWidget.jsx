import React from "react";
import { useEffect, useState } from "react";
import { useWeatherStore } from '../store/weatherStore.js';

const WeatherWidget = () => {
    // 상태
    const {weather, isLoading, error, fetchWeather } = useWeatherStore();
    // 기본값: 서울
    const [ city, setCity ] = useState('Seoul');

    // useEffect로 컴포넌트 마운트 시 자동으로 도시, 날씨 조회되게 설정
    useEffect(() => {
        fetchWeather(city);
    }, []); // []: 마운트 시 한번만 실행, 배열에 값을 넣으면 그 값에 의존하여 useEffect가 실행됨

    const handleKeyDown = (e) => {
        if(e.key === "Enter" && city.trim()) {
            e.preventDefault(); // 엔터의 기본 실행 방지
            fetchWeather(city.trim());
        }
    };

    return (
        <div className='p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-between gap-4'>
            {/* 좌측: 도시 검색 영역 */}
            <div className='flex items-center gap-2'>
                <input
                    type='text'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder='도시 영문명 (예: Seoul)'
                    className='text-sm font-semibold text-gray-700 border-b border-gray-300 outline-none focus:border-blue-500 w-32 bg-transparent'
                />
                <button
                    onClick={() => city.trim() && fetchWeather(city.trim())}
                    className='text-xs text-white bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-600'>
                    검색
                </button>
            </div>
            {/* 우측: 날씨 정보 표시 영역 */}
            <div className='flex items-center gap-2'>
                {/* 로딩 상태 */}
                {isLoading && (
                    <span className='text-xs text-gray-400'>로딩 중...</span>
                )}
                {/* 오류 상태 */}
                {error && !isLoading && (
                    <span className='text-xs text-red-400'>오류: {error}</span>
                )}
                {/* 성공 상태 — 아이콘 + 온도 + 설명 */}
                {weather && !isLoading && !error && (
                    <>
                        <img

                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                            alt='weather icon'
                            className='w-10 h-10'
                        />
                        <div className='text-right'>
                            <p className='text-lg font-bold text-gray-800'>
                                {Math.round(weather.main.temp)}°C
                            </p>
                            <p className='text-xs text-gray-500 capitalize'>
                                {weather.weather[0].description}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    )

}
export default WeatherWidget;
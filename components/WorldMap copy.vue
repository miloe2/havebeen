<template>
   <ClientOnly>
    <div class="app" style="height: 2000px;">
      <h1>svgMap Vue demo</h1>
      <div id="svgMap" style="width: 100%;"></div>
    </div>
  </ClientOnly> 
</template>
<script setup>
import { onMounted, ref } from 'vue';
import 'svgmap/dist/svgMap.min.css';
onMounted(() => {
  // SVG Pan Zoom 스크립트 로드
  const svgPanZoomScript = document.createElement('script');
  svgPanZoomScript.src = 'https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js';
  svgPanZoomScript.onload = () => {
    console.log('SVG Pan Zoom 로드 완료');
    // 여기서 SVG Pan Zoom 초기화 코드를 실행할 수 있습니다.
  };
  document.body.appendChild(svgPanZoomScript);

  // svgMap 스크립트 로드
  const svgMapScript = document.createElement('script');
  svgMapScript.src = 'https://cdn.jsdelivr.net/gh/StephanWagner/svgMap@v2.10.1/dist/svgMap.min.js';
  svgMapScript.onload = () => {
    console.log('svgMap 로드 완료');
    const mySvgMap = new window.svgMap({
      targetElementID: 'svgMap',
      flagType : 'emoji',
      data: {
      // data: {
      //   gdp: {
      //     name: 'GDP per capita',
      //     format: '{0} USD',
      //     thousandSeparator: ',',
      //     thresholdMax: 50000,
      //     thresholdMin: 1000
      //   },
      //   change: {
      //     name: 'Change to year before',
      //     format: '{0} %'
      //   }
      // },
      // applyData: 'gdp',
      // values: {
      //   AF: { gdp: 587, change: 4.73 },
      //   AL: { gdp: 4583, change: 11.09 },
      //   DZ: { gdp: 4293, change: 10.01 }
      // }
    }
  });
    }
  document.body.appendChild(svgMapScript);

  // // svgMap 스타일시트 로드
  // const svgMapStylesheet = document.createElement('link');
  // svgMapStylesheet.href = 'https://cdn.jsdelivr.net/gh/StephanWagner/svgMap@v2.10.1/dist/svgMap.min.css';
  // svgMapStylesheet.rel = 'stylesheet';
  // document.head.appendChild(svgMapStylesheet);
  //   console.log('renderstart')
  //   console.log(window.svgMap)
})

</script>



<style>
</style>
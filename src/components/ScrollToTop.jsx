import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {

  const { pathname } = useLocation();


  useEffect(() => {


    const start = window.scrollY;

    const duration = 800; // 動畫時間(ms)

    const startTime = performance.now();



    function scrollAnimation(currentTime) {


      const elapsed = currentTime - startTime;


      const progress = Math.min(
        elapsed / duration,
        1
      );


      // Ease Out
      const ease =
        1 - Math.pow(1 - progress, 4);



      window.scrollTo(
        0,
        start * (1 - ease)
      );



      if (progress < 1) {

        requestAnimationFrame(scrollAnimation);

      }


    }



    requestAnimationFrame(scrollAnimation);



  }, [pathname]);



  return null;

}


export default ScrollToTop;
import { newEl } from "../source";
import { layout } from "./layout";

const child=`
  <a href="/" class="footer__logo-link">
  <svg
    class="footer__logo-icon"
    width="164"
    height="35"
    viewBox="0 0 164 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M158.688 26.3345C157.466 26.3345 156.409 26.0525 155.516 25.4883C154.624 24.9185 153.933 24.1315 153.444 23.1273C152.961 22.1175 152.719 20.9553 152.719 19.6409C152.719 18.332 152.961 17.1699 153.444 16.1544C153.933 15.1333 154.607 14.335 155.465 13.7596C156.329 13.1785 157.327 12.888 158.458 12.888C159.168 12.888 159.853 13.0177 160.513 13.2772C161.172 13.5311 161.764 13.9232 162.287 14.4535C162.815 14.9782 163.233 15.641 163.54 16.4421C163.847 17.2376 164 18.1797 164 19.2685V20.0132H153.768V18.6846H162.449C162.449 17.8497 162.278 17.0994 161.937 16.4337C161.602 15.7623 161.133 15.232 160.53 14.8428C159.933 14.4535 159.242 14.2589 158.458 14.2589C157.628 14.2589 156.897 14.4789 156.266 14.9189C155.635 15.359 155.141 15.94 154.783 16.6621C154.43 17.3843 154.251 18.1741 154.246 19.0316V19.827C154.246 20.8594 154.425 21.7621 154.783 22.535C155.147 23.3022 155.661 23.8974 156.326 24.3205C156.991 24.7436 157.779 24.9552 158.688 24.9552C159.308 24.9552 159.851 24.8593 160.317 24.6675C160.789 24.4757 161.184 24.219 161.502 23.8974C161.826 23.5702 162.071 23.212 162.235 22.8227L163.676 23.2881C163.477 23.8353 163.151 24.3403 162.696 24.8029C162.247 25.2655 161.684 25.6378 161.007 25.9199C160.337 26.1963 159.564 26.3345 158.688 26.3345Z"
      fill="#0044F0"
    />
    <path
      d="M149.377 8.73309V26.0638H147.859V8.73309H149.377Z"
      fill="#0044F0"
    />
    <path
      d="M133.461 30.938V13.0657H134.937V15.5451H135.116C135.298 15.1559 135.548 14.7581 135.866 14.3519C136.184 13.9401 136.605 13.5932 137.128 13.3111C137.657 13.029 138.322 12.888 139.123 12.888C140.203 12.888 141.147 13.17 141.954 13.7342C142.767 14.2927 143.398 15.0769 143.847 16.0867C144.302 17.0909 144.529 18.2615 144.529 19.5986C144.529 20.9412 144.302 22.1175 143.847 23.1273C143.398 24.1372 142.767 24.9242 141.954 25.4883C141.147 26.0525 140.209 26.3345 139.14 26.3345C138.35 26.3345 137.688 26.1935 137.154 25.9114C136.625 25.6293 136.196 25.2824 135.866 24.8706C135.542 24.4531 135.292 24.0469 135.116 23.652H134.979V30.938H133.461ZM134.962 19.5732C134.962 20.6225 135.119 21.5533 135.431 22.3657C135.75 23.1725 136.204 23.8071 136.795 24.2697C137.392 24.7267 138.114 24.9552 138.961 24.9552C139.831 24.9552 140.564 24.7182 141.161 24.2444C141.764 23.7648 142.222 23.1189 142.534 22.3065C142.852 21.4941 143.012 20.583 143.012 19.5732C143.012 18.5746 142.855 17.6748 142.543 16.8737C142.236 16.0726 141.781 15.4379 141.178 14.9697C140.576 14.4958 139.837 14.2589 138.961 14.2589C138.109 14.2589 137.384 14.4873 136.787 14.9443C136.19 15.3956 135.735 16.0218 135.423 16.8229C135.116 17.6184 134.962 18.5351 134.962 19.5732Z"
      fill="#0044F0"
    />
    <path
      d="M124.364 26.3345C123.233 26.3345 122.233 26.0496 121.363 25.4798C120.499 24.9101 119.822 24.1231 119.333 23.1189C118.845 22.109 118.6 20.9441 118.6 19.6239C118.6 18.2925 118.845 17.1219 119.333 16.1121C119.822 15.0966 120.499 14.3068 121.363 13.7427C122.233 13.1729 123.233 12.888 124.364 12.888C125.496 12.888 126.493 13.1729 127.357 13.7427C128.221 14.3125 128.898 15.1023 129.387 16.1121C129.881 17.1219 130.129 18.2925 130.129 19.6239C130.129 20.9441 129.884 22.109 129.395 23.1189C128.906 24.1231 128.227 24.9101 127.357 25.4798C126.493 26.0496 125.496 26.3345 124.364 26.3345ZM124.364 24.9552C125.274 24.9552 126.044 24.7126 126.675 24.2274C127.306 23.7423 127.784 23.0963 128.108 22.2896C128.437 21.4828 128.602 20.5943 128.602 19.6239C128.602 18.6536 128.437 17.7622 128.108 16.9499C127.784 16.1375 127.306 15.4859 126.675 14.9951C126.044 14.5043 125.274 14.2589 124.364 14.2589C123.46 14.2589 122.69 14.5043 122.054 14.9951C121.423 15.4859 120.942 16.1375 120.612 16.9499C120.288 17.7622 120.126 18.6536 120.126 19.6239C120.126 20.5943 120.288 21.4828 120.612 22.2896C120.942 23.0963 121.423 23.7423 122.054 24.2274C122.685 24.7126 123.455 24.9552 124.364 24.9552Z"
      fill="#0044F0"
    />
    <path
      d="M110.617 26.3345C109.395 26.3345 108.337 26.0525 107.445 25.4883C106.552 24.9185 105.862 24.1315 105.373 23.1273C104.89 22.1175 104.648 20.9553 104.648 19.6409C104.648 18.332 104.89 17.1699 105.373 16.1544C105.862 15.1333 106.535 14.335 107.394 13.7596C108.258 13.1785 109.255 12.888 110.387 12.888C111.097 12.888 111.782 13.0177 112.442 13.2772C113.101 13.5311 113.692 13.9232 114.215 14.4535C114.744 14.9782 115.162 15.641 115.469 16.4421C115.776 17.2376 115.929 18.1797 115.929 19.2685V20.0132H105.697V18.6846H114.377C114.377 17.8497 114.207 17.0994 113.866 16.4337C113.53 15.7623 113.061 15.232 112.459 14.8428C111.862 14.4535 111.171 14.2589 110.387 14.2589C109.557 14.2589 108.826 14.4789 108.195 14.9189C107.564 15.359 107.07 15.94 106.711 16.6621C106.359 17.3843 106.18 18.1741 106.174 19.0316V19.827C106.174 20.8594 106.353 21.7621 106.711 22.535C107.075 23.3022 107.59 23.8974 108.255 24.3205C108.92 24.7436 109.707 24.9552 110.617 24.9552C111.236 24.9552 111.779 24.8593 112.246 24.6675C112.717 24.4757 113.112 24.219 113.431 23.8974C113.755 23.5702 113.999 23.212 114.164 22.8227L115.605 23.2881C115.406 23.8353 115.079 24.3403 114.625 24.8029C114.175 25.2655 113.613 25.6378 112.936 25.9199C112.265 26.1963 111.492 26.3345 110.617 26.3345Z"
      fill="#0044F0"
    />
    <path
      d="M90.7705 26.0638V8.73309H96.4069C97.6461 8.73309 98.6807 8.97004 99.5107 9.44393C100.346 9.91217 100.974 10.5497 101.395 11.3564C101.822 12.1631 102.035 13.0714 102.035 14.0813C102.035 15.0911 101.824 16.0022 101.404 16.8146C100.983 17.6213 100.358 18.2616 99.5277 18.7355C98.6978 19.2038 97.666 19.4379 96.4324 19.4379H91.9984V18.0162H96.3898C97.305 18.0162 98.0639 17.847 98.6665 17.5085C99.2691 17.1643 99.7182 16.6961 100.014 16.1037C100.315 15.5114 100.466 14.8372 100.466 14.0813C100.466 13.3253 100.315 12.6511 100.014 12.0588C99.7182 11.4664 99.2662 11.001 98.658 10.6625C98.0554 10.324 97.2908 10.1548 96.3642 10.1548H92.3651V26.0638H90.7705Z"
      fill="#0044F0"
    />
    <path
      d="M82.5462 8.73309V26.0638H77.8052V8.73309H82.5462Z"
      fill="#0044F0"
    />
    <path
      d="M60.6406 26.0638V8.73309H65.3816V15.7399H65.6204L70.873 8.73309H76.3985L70.4978 16.4507L76.535 26.0638H70.873L66.9506 19.5648L65.3816 21.5958V26.0638H60.6406Z"
      fill="#0044F0"
    />
    <path
      d="M54.0623 14.1488C54.0168 13.5847 53.8036 13.1446 53.4228 12.8287C53.0476 12.5128 52.4763 12.3548 51.7088 12.3548C51.22 12.3548 50.8192 12.4141 50.5065 12.5325C50.1996 12.6454 49.9722 12.8005 49.8244 12.998C49.6766 13.1954 49.5998 13.4211 49.5941 13.6749C49.5828 13.8837 49.6197 14.0727 49.705 14.2419C49.796 14.4055 49.9381 14.555 50.1313 14.6904C50.3246 14.8202 50.5719 14.9386 50.8732 15.0458C51.1745 15.153 51.5326 15.2489 51.9476 15.3336L53.3801 15.6382C54.3465 15.8413 55.1736 16.1093 55.8615 16.4421C56.5493 16.775 57.1121 17.1671 57.5498 17.6184C57.9876 18.0641 58.3087 18.5661 58.5134 19.1247C58.7237 19.6832 58.8317 20.2925 58.8374 20.9525C58.8317 22.0921 58.5447 23.0568 57.9762 23.8466C57.4077 24.6364 56.5948 25.2372 55.5375 25.6491C54.4858 26.0609 53.221 26.2668 51.7429 26.2668C50.2251 26.2668 48.9006 26.044 47.7694 25.5983C46.6438 25.1526 45.7684 24.4672 45.143 23.542C44.5234 22.6111 44.2108 21.4208 44.2051 19.9709H48.7073C48.7358 20.5012 48.8693 20.9469 49.1081 21.3079C49.3469 21.669 49.6823 21.9426 50.1143 22.1288C50.552 22.3149 51.0722 22.408 51.6747 22.408C52.1807 22.408 52.6042 22.346 52.9453 22.2219C53.2863 22.0977 53.545 21.9257 53.7212 21.7057C53.8974 21.4856 53.9884 21.2346 53.9941 20.9525C53.9884 20.6874 53.9003 20.4561 53.7297 20.2586C53.5649 20.0555 53.292 19.875 52.9111 19.717C52.5303 19.5534 52.0158 19.4011 51.3678 19.2601L49.6283 18.8877C48.082 18.5549 46.8627 17.9992 45.9702 17.2206C45.0834 16.4365 44.6428 15.3674 44.6485 14.0134C44.6428 12.9133 44.9384 11.9515 45.5353 11.1278C46.1379 10.2985 46.9707 9.65254 48.0337 9.18994C49.1024 8.72734 50.3275 8.49603 51.7088 8.49603C53.1186 8.49603 54.338 8.73016 55.3669 9.1984C56.3959 9.66665 57.1889 10.3267 57.746 11.1786C58.3087 12.0248 58.593 13.0149 58.5987 14.1488H54.0623Z"
      fill="#0044F0"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.84979 17.3342L27.738 32.406L27.7393 32.4067C27.9704 32.5498 28.1703 32.6146 28.3601 32.5823C28.5706 32.5463 28.753 32.4103 28.9371 32.2371C29.2154 31.9751 29.6557 31.9868 29.9197 32.263C30.1836 32.5392 30.1719 32.9762 29.8935 33.2381C29.4894 33.6183 29.0577 33.8629 28.5958 33.9418C28.1141 34.0241 27.5852 33.9388 26.9975 33.5734L26.9935 33.5709L3.10004 18.4958C3.09761 18.4943 3.09522 18.4928 3.09284 18.4912L3.0925 18.491C2.51197 18.1146 2.21247 17.6738 2.08592 17.2053C1.96449 16.7559 2.00736 16.2645 2.18591 15.7411C2.30886 15.3805 2.70372 15.1868 3.06705 15.3089C3.43045 15.431 3.62553 15.8228 3.5025 16.1834C3.42118 16.4219 3.37319 16.6433 3.42851 16.848C3.47837 17.0327 3.62172 17.1858 3.84979 17.3342ZM28.1245 1.33076C29.8728 2.10783 30.6564 4.1473 29.8734 5.88234C29.0904 7.61731 27.0353 8.39506 25.2871 7.618C23.5388 6.84093 22.7551 4.80139 23.5381 3.06642C24.3212 1.33145 26.3762 0.553692 28.1245 1.33076ZM17.3621 13.2328L19.0643 9.46105C19.1372 9.29948 19.1545 9.1186 19.1135 8.9463C19.0726 8.774 18.9757 8.61985 18.8377 8.50761L15.1525 5.5101C14.4167 4.91229 14.1475 4.40575 14.4524 3.71941L14.4763 3.66567C14.7812 2.97926 15.4342 2.46462 16.2807 2.97082C16.2807 2.97082 19.7612 5.49329 20.7065 6.2416C20.8665 6.36827 21.042 6.47439 21.2288 6.55743C22.3623 7.06122 26.5219 9.11593 27.9008 9.72884C28.1899 9.85731 28.4546 10.0339 28.6836 10.2511L32.4669 13.838C33.0257 14.3802 33.4589 14.9539 33.146 15.6366L33.1215 15.6902C32.8085 16.3729 31.9707 16.8957 31.309 16.3641L27.4532 12.6291C27.4287 12.6053 27.3988 12.5878 27.366 12.5779C27.3332 12.5681 27.2985 12.5663 27.2649 12.5727C27.2312 12.579 27.1996 12.5934 27.1727 12.6145C27.1459 12.6355 27.1245 12.6628 27.1106 12.6938L24.8872 17.6203L28.4513 22.5115C28.6538 22.7892 28.7557 23.1266 28.7407 23.469C28.7257 23.8115 28.5945 24.1388 28.3686 24.398L25.3402 27.8721C25.0982 28.1496 24.7551 28.3203 24.3862 28.3468C24.0174 28.3732 23.6531 28.2532 23.3734 28.0131C22.7911 27.5131 22.7274 26.6393 23.2312 26.0613L24.9911 24.0427C25.049 23.9763 25.0826 23.8924 25.0865 23.8047C25.0903 23.7169 25.0642 23.6304 25.0123 23.5593L23.6043 21.6269C21.2897 18.4685 18.0815 17.2013 15.6657 16.3509L12.7823 15.8016C12.6954 15.785 12.6054 15.7981 12.5269 15.8386C12.4484 15.8792 12.386 15.9449 12.3499 16.0251L11.2504 18.4611C10.9356 19.1586 10.1108 19.4707 9.40797 19.1584C9.07048 19.0084 8.80686 18.7314 8.67509 18.3885C8.54332 18.0456 8.55419 17.6648 8.70532 17.3299C9.25383 16.1145 10.0752 14.2949 10.5977 13.1376C10.7388 12.8248 10.9823 12.5685 11.2887 12.4102C11.595 12.252 11.9462 12.201 12.2854 12.2657L17.3621 13.2328Z"
      fill="#0044F0"
    />
  </svg>
</a>
<div class="footer__contacts">
  <a href="tel:+70000000000" class="footer__phone-link">
    <svg
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.48566 0.544568L3.59251 0.210854C3.95781 0.100892 4.35064 0.127572 4.69772 0.285917C5.0448 0.444262 5.32242 0.723459 5.4788 1.07143L6.2548 2.79714C6.38948 3.09652 6.42702 3.43057 6.36215 3.75238C6.29727 4.07419 6.13324 4.36761 5.89309 4.59143L4.71194 5.692C4.55366 5.84228 4.67366 6.428 5.25194 7.43028C5.8308 8.43314 6.27823 8.82971 6.48451 8.768L8.03194 8.29486C8.34561 8.19891 8.68143 8.20353 8.99234 8.30805C9.30325 8.41258 9.57365 8.61177 9.76566 8.87771L10.8685 10.4063C11.0913 10.715 11.1944 11.094 11.1588 11.473C11.1232 11.8519 10.9512 12.2051 10.6748 12.4669L9.82223 13.2743C9.547 13.5349 9.20756 13.7179 8.83854 13.8045C8.46952 13.8912 8.08412 13.8784 7.72166 13.7674C5.93537 13.2206 4.28109 11.5977 2.73651 8.92171C1.18851 6.24171 0.603943 3.98114 1.01137 2.13428C1.09355 1.76214 1.27348 1.41865 1.53263 1.13921C1.79177 0.859777 2.12075 0.654508 2.48566 0.544568Z"
        fill="white"
      />
    </svg>
    +7 (000) 000-00-00</a
  >
  <ul class="footer__social-list">
    <li class="footer__social-item">
      <a href="#" class="footer__social-link">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0005 0.479996C5.63807 0.479996 0.480469 5.6376 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.6376 18.3629 0.479996 12.0005 0.479996ZM16.4309 13.4772C16.4309 13.4772 17.4497 14.4828 17.7005 14.9496C17.7077 14.9592 17.7113 14.9688 17.7137 14.9736C17.8157 15.1452 17.8397 15.2784 17.7893 15.378C17.7053 15.5436 17.4173 15.6252 17.3189 15.6324H15.5189C15.3941 15.6324 15.1325 15.6 14.8157 15.3816C14.5721 15.2112 14.3321 14.9316 14.0981 14.6592C13.7489 14.2536 13.4465 13.9032 13.1417 13.9032C13.103 13.9031 13.0645 13.9092 13.0277 13.9212C12.7973 13.9956 12.5021 14.3244 12.5021 15.2004C12.5021 15.474 12.2861 15.6312 12.1337 15.6312H11.3093C11.0285 15.6312 9.56567 15.5328 8.26967 14.166C6.68327 12.492 5.25527 9.1344 5.24327 9.1032C5.15327 8.886 5.33927 8.7696 5.54207 8.7696H7.36007C7.60247 8.7696 7.68167 8.9172 7.73687 9.048C7.80167 9.2004 8.03927 9.8064 8.42927 10.488C9.06167 11.5992 9.44927 12.0504 9.76007 12.0504C9.81835 12.0497 9.87559 12.0349 9.92687 12.0072C10.3325 11.7816 10.2569 10.3356 10.2389 10.0356C10.2389 9.9792 10.2377 9.3888 10.0301 9.1056C9.88127 8.9004 9.62807 8.8224 9.47447 8.7936C9.53664 8.70781 9.61855 8.63825 9.71327 8.5908C9.99167 8.4516 10.4933 8.4312 10.9913 8.4312H11.2685C11.8085 8.4384 11.9477 8.4732 12.1433 8.5224C12.5393 8.6172 12.5477 8.8728 12.5129 9.7476C12.5021 9.996 12.4913 10.2768 12.4913 10.608C12.4913 10.68 12.4877 10.7568 12.4877 10.8384C12.4757 11.2836 12.4613 11.7888 12.7757 11.9964C12.8167 12.0221 12.8641 12.0358 12.9125 12.036C13.0217 12.036 13.3505 12.036 14.2409 10.5084C14.5155 10.0167 14.7541 9.50577 14.9549 8.9796C14.9729 8.9484 15.0257 8.8524 15.0881 8.8152C15.1341 8.79172 15.1852 8.77978 15.2369 8.7804H17.3741C17.6069 8.7804 17.7665 8.8152 17.7965 8.9052C17.8493 9.048 17.7869 9.4836 16.8113 10.8048L16.3757 11.3796C15.4913 12.5388 15.4913 12.5976 16.4309 13.4772Z"
            fill="white"
          />
        </svg>
      </a>
    </li>
    <li class="footer__social-item">
      <a href="#" class="footer__social-link">
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
            fill="white"
          />
        </svg>
      </a>
    </li>
    <li class="footer__social-item">
      <a href="#" class="footer__social-link">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM12.4305 8.859C11.2635 9.345 8.9295 10.35 5.4315 11.874C4.8645 12.099 4.566 12.321 4.539 12.537C4.494 12.9015 4.9515 13.0455 5.574 13.242L5.8365 13.3245C6.4485 13.524 7.2735 13.7565 7.701 13.7655C8.091 13.7745 8.5245 13.6155 9.003 13.2855C12.2715 11.079 13.959 9.9645 14.064 9.9405C14.139 9.9225 14.244 9.9015 14.313 9.9645C14.3835 10.026 14.376 10.1445 14.3685 10.176C14.3235 10.3695 12.528 12.0375 11.5995 12.9015C11.31 13.1715 11.1045 13.362 11.0625 13.4055C10.97 13.5 10.876 13.593 10.7805 13.6845C10.2105 14.2335 9.7845 14.6445 10.803 15.3165C11.2935 15.6405 11.6865 15.906 12.078 16.173C12.504 16.464 12.93 16.7535 13.482 17.1165C13.6215 17.2065 13.7565 17.304 13.887 17.397C14.3835 17.751 14.832 18.069 15.3825 18.018C15.7035 17.988 16.035 17.688 16.203 16.788C16.6005 14.6625 17.382 10.059 17.562 8.1615C17.573 8.00376 17.5664 7.84529 17.5425 7.689C17.5284 7.56288 17.4673 7.44669 17.3715 7.3635C17.235 7.26928 17.0723 7.22047 16.9065 7.224C16.4565 7.2315 15.762 7.473 12.4305 8.859Z"
            fill="white"
          />
        </svg>
      </a>
    </li>
  </ul>
</div>
<ul class="footer__devloper-list">
  <li class="footer__developer-item">
    Designer:
    <a href="#" class="footer__developer-author">Anastasia Ilina</a>
  </li>
  <li class="footer__developer-item">
    Developer:
    <a href="#" class="footer__developer-author">Anastasia Ilina</a>
  </li>
</ul>
<p class="footer__copyright">©SKI People, 2025</p>
`;

export const footer=()=>{
  const el = newEl("footer", "footer");

  el.append(layout(child,'footer__container'));
  
  return el;
}
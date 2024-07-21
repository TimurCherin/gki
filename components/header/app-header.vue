<template>
<header class="header">
  <div class="header-left">
    <div class="header-left__button js-mobile-btn" id="burger-menu">
      <div class="header-mobile__burger"  >
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
    </div>
    <div class="header-logo">
      <a href="/">
        <div class="logo"><svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_299_6)">
            <path
              d="M30 0.0636902H0.0118408V29.9942H30V0.0636902Z"
              fill="white"
            />
            <path
              d="M0 0V23.4581L15.1832 0.387881L29.9645 23.4581V0H0Z"
              fill="#178A9C"
            />
            <path
              d="M14.9823 8.55075L29.9645 23.4581C29.9645 23.4581 16.6726 9.91702 0 23.4581L14.9823 8.55075Z"
              fill="#178A9C"
            />
            <path
              d="M15.0177 17.8194L9.79315 24.2339L11.0106 25.577L13.5461 28.3674L15.0177 29.9826L16.448 28.3674L18.552 25.988L20.0946 24.2339L15.0177 17.8194ZM11.9326 24.0197C11.9674 23.2433 12.3067 22.5101 12.8798 21.9728C13.4529 21.4355 14.2156 21.1356 15.0089 21.1356C15.8022 21.1356 16.5649 21.4355 17.138 21.9728C17.7111 22.5101 18.0504 23.2433 18.0851 24.0197H11.9326Z"
              fill="#178A9C"
            />
            <path
              d="M18.0851 24.0197C18.1033 24.4265 18.0373 24.8327 17.8909 25.2139C17.7445 25.595 17.5208 25.9432 17.2334 26.2373C16.9459 26.5315 16.6006 26.7657 16.2183 26.9256C15.836 27.0855 15.4246 27.168 15.0089 27.168C14.5932 27.168 14.1817 27.0855 13.7994 26.9256C13.4171 26.7657 13.0718 26.5315 12.7844 26.2373C12.4969 25.9432 12.2733 25.595 12.1269 25.2139C11.9805 24.8327 11.9144 24.4265 11.9326 24.0197H18.0851Z"
              fill="#178A9C"
            />
            <path
              d="M18.552 24.0197V26.0054L16.448 28.379H13.5461L11.0106 25.577V24.0197H18.552Z"
              fill="#178A9C"
            />
          </g>
          <defs>
            <clipPath id="clip0_299_6">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg></div>

        <span class="header-logo__title"
          >Науково-дослідний інститут геодезії і картографії</span
        >
      </a>
    </div>
  </div>
  <nav class="header-nav">
    <div class="header-nav__item">
      <span class="header-nav__item-link">
        <span>Інститут</span>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_340_251)">
            <path
              d="M2 3L4 5L6 3L2 3Z"
              fill="#626D78"
              stroke="#626D78"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_340_251">
              <rect width="8" height="8" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <div class="header-subnav">
        <a class="header-subnav__link" href="about"
          >Про інститут</a
        >
        <a class="header-subnav__link" href="history"
          >Історія</a
        >
        <a class="header-subnav__link" href="kerivnictvo"
          >Керівництво</a
        >
        <a class="header-subnav__link" href="partners"
          >Наші партнери</a
        >
      </div>
    </div>
    <div class="header-nav__item">
      <a class="header-nav__item-link" href="projects"
        >Наукова діяльність і проєкти</a
      >
    </div>
    <div class="header-nav__item">
      <a class="header-nav__item-link" href="services"
        >Cервіси</a
      >
    </div>

    <div class="header-nav__item">
      <a class="header-nav__item-link" href="articles"
        >Публікації</a
      >
    </div>
    <div class="header-nav__item">
      <a class="header-nav__item-link" href="documents"
        >Нормативні документи</a
      >
    </div>
    <div class="header-nav__item">
      <a class="header-nav__item-link" href="contacts"
        >Контакти</a
      >
    </div>
  </nav>
  <div class="header-button">
    <div class="header-button__item " id="header-button__item-vision">
      <!-- {{{_vue '/vue/SITE/vs-bad-vision.vue' tag=1}}} -->
    </div>
    <div class="header-button__item" id="uaButton"><span> UA </span></div>
    <div class="header-button__item" id="enButton"><span> EN </span></div>

    <div class="header-button__item" >
      <span class="js-btn-search">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_463_43)">
            <path
              d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z"
              stroke="#363C42"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 17.5L12.5 12.5"
              stroke="#363C42"
              stroke-width="1.5"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_463_43">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
  </div>
</header>

</template>

<script>
export default {

};

</script>

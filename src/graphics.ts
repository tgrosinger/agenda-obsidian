export const Element = (svgText: string): HTMLElement => {
  const parser = new DOMParser();
  return parser.parseFromString(svgText, 'text/xml').documentElement;
};

export const movedIconSvg = `
    <svg class="slated-task-icon" width="67.866mm" height="50.848mm" version="1.1" viewBox="0 0 67.866 50.848" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path transform="scale(.26458)" d="m165.26 45.489v-19.196c0-9.7004-7.8093-17.51-17.51-17.51h-122.18c-9.7004 0-17.51 7.8093-17.51 17.51v139.45c0 9.7004 7.8093 17.51 17.51 17.51h122.18c9.7004 0 17.51-7.8093 17.51-17.51v-17.186" stroke-miterlimit="31.5" stroke-width="16"/>
    <path d="m54.542 15.083 11.35 10.512-11.274 10.131m-26.509-10.055 37.783-0.076176" stroke-width="4.2333"/>
    </g>
    </svg>`;

export const skippedIconSvg = `
    <svg class="slated-task-icon" width="67.866mm" height="50.848mm" version="1.1" viewBox="0 0 67.866 50.848" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2.1126" y="2.4062" width="41.592" height="46.163" ry="4.6328" stroke-miterlimit="31.5" stroke-width="4.2333"/>
    <path d="m13.818 25.488h18.182" stroke-width="3.9308"/>
    </g>
    </svg>`;

const skippedIconSvgOld = `
<svg class="slated-task-icon" width="67.866mm" height="50.848mm" version="1.1" viewBox="0 0 67.866 50.848" xmlns="http://www.w3.org/2000/svg">
 <g fill="none">
  <rect x="2.1126" y="2.4062" width="41.592" height="46.163" ry="4.6328" stroke-linejoin="round" stroke-miterlimit="31.5" stroke-width="4.2333"/>
  <path d="m14.115 40.465v-29.956l13.287 14.978z" stroke-linejoin="round" stroke-miterlimit="31.5" stroke-width="4.2333" style="paint-order:normal"/>
  <path d="m31.702 10.509v29.956" stroke-linecap="round" stroke-width="4.2333"/>
 </g>
</svg>`;

export const buyMeACoffee = `
<svg width="150" height="42" fill="none" version="1.1" viewBox="0 0 260 73" xmlns="http://www.w3.org/2000/svg">
 <path d="M0 11.68C0 5.22932 5.22931 0 11.68 0H248.2C254.651 0 259.88 5.22931 259.88 11.68V61.32C259.88 67.7707 254.651 73 248.2 73H11.68C5.22931 73 0 67.7707 0 61.32V11.68Z" fill="#fd0"/>
 <g fill="#0D0C22">
  <path d="m52.257 24.008-0.032-0.0189-0.0742-0.0226c0.0298 0.0252 0.0672 0.0398 0.1062 0.0415z"/>
  <path d="m52.725 27.346-0.0353 0.0099 0.0353-0.0099z"/>
  <path d="m52.27 24.002c-0.0041-5e-4 -0.0082-0.0015-0.0121-0.0029-2e-4 0.0027-2e-4 0.0054 0 0.0081 0.0044-6e-4 0.0086-0.0024 0.0121-0.0052z"/>
  <path d="m52.258 24.009h0.0065v-4e-3l-0.0065 4e-3z"/>
  <path d="m52.697 27.339 0.054-0.0308 0.0201-0.0113 0.0183-0.0195c-0.0343 0.0148-0.0656 0.0357-0.0924 0.0616z"/>
  <path d="m52.348 24.081-0.0528-0.0502-0.0358-0.0195c0.0192 0.0339 0.051 0.059 0.0886 0.0697z"/>
  <path d="m39.068 56.469c-0.0422 0.0182-0.0791 0.0468-0.1075 0.083l0.0334-0.0214c0.0226-0.0208 0.0546-0.0453 0.0741-0.0616z"/>
  <path d="m46.78 54.952c0-0.0477-0.0233-0.0389-0.0176 0.1308 0-0.0139 0.0057-0.0277 0.0082-0.0409 0.0031-0.0302 0.0056-0.0597 0.0094-0.0899z"/>
  <path d="m45.984 56.469c-0.0422 0.0182-0.0791 0.0468-0.1074 0.083l0.0333-0.0214c0.0226-0.0208 0.0546-0.0453 0.0741-0.0616z"/>
  <path d="m33.631 56.83c-0.032-0.0278-0.0712-0.0461-0.1131-0.0528 0.0339 0.0164 0.0679 0.0327 0.0905 0.0453l0.0226 0.0075z"/>
  <path d="m32.412 55.66c-5e-3 -0.0495-0.0202-0.0974-0.0446-0.1408 0.0173 0.0452 0.0318 0.0914 0.0434 0.1383l0.0012 0.0025z"/>
 </g>
 <path d="m40.623 34.722c-1.6781 0.7184-3.5826 1.533-6.0508 1.533-1.0325-2e-3 -2.06-0.1437-3.0546-0.4211l1.7071 17.526c0.0604 0.7325 0.3941 1.4156 0.9348 1.9134 0.5408 0.4979 1.249 0.7743 1.984 0.7741 0 0 2.4205 0.1257 3.2281 0.1257 0.8693 0 3.4758-0.1257 3.4758-0.1257 0.7349 0 1.443-0.2764 1.9836-0.7743 0.5406-0.4978 0.8742-1.1808 0.9346-1.9132l1.8284-19.368c-0.8171-0.279-1.6417-0.4644-2.5713-0.4644-1.6077-7e-4 -2.9031 0.5531-4.3997 1.1935z" fill="#fff"/>
 <path d="m26.234 27.245 0.0289 0.027 0.0188 0.0113c-0.0145-0.0144-0.0305-0.0273-0.0477-0.0383z" fill="#0D0C22"/>
 <path d="m55.491 25.627-0.257-1.2967c-0.2307-1.1634-0.7543-2.2627-1.9485-2.6832-0.3827-0.1345-0.8171-0.1923-1.1106-0.4707-0.2935-0.2785-0.3802-0.7109-0.4481-1.1119-0.1257-0.736-0.2439-1.4726-0.3727-2.2074-0.1113-0.6316-0.1993-1.3412-0.489-1.9207-0.3771-0.7782-1.1597-1.2332-1.9378-1.5343-0.3987-0.1488-0.8056-0.2747-1.2187-0.3771-1.944-0.5129-3.988-0.7014-5.988-0.8089-2.4005-0.1325-4.8074-0.0926-7.2022 0.1194-1.7825 0.1622-3.6599 0.3583-5.3538 0.9749-0.6191 0.2256-1.2571 0.4965-1.7278 0.9748-0.5777 0.5877-0.7662 1.4965-0.3445 2.2294 0.2998 0.5204 0.8077 0.8881 1.3463 1.1313 0.7016 0.3134 1.4344 0.5519 2.186 0.7115 2.093 0.4626 4.2608 0.6443 6.3991 0.7216 2.3699 0.0956 4.7437 0.0181 7.1023-0.232 0.5833-0.0641 1.1655-0.141 1.7467-0.2306 0.6845-0.105 1.1238-1 0.922-1.6235-0.2413-0.7454-0.8899-1.0346-1.6234-0.9221-0.90387 0.14396-1.8534 0.2114-2.6908 0.2835-1.1552 0.0805-2.3136 0.1175-3.4713 0.1194-1.1376 0-2.2759-0.032-3.411-0.1068-1.5689-0.13937-2.9125-0.3062-4.2821-0.6028-0.16844-0.15273-0.10148-0.2725 0.1193-0.3394 0.56768-0.12277 1.1122-0.1975 1.6386-0.2866h0.0038c0.2558-0.017 0.5129-0.0628 0.7674-0.093 2.2147-0.2304 4.4426-0.3089 6.668-0.2351 2.1349 0.05445 3.9508 0.25816 5.9239 0.6235 0.763 0.166 1.7429 0.22 2.0823 1.0559 0.34473 1.2217 0.58881 2.5712 0.8372 3.7272 0.07675 0.3658 0.01169 0.46565-0.3872 0.5525-7.4853 1.254-15.053 0.59949-21.308-0.418-0.7636-0.1257-1.494-0.0628-2.1847 0.3143-0.567 0.3102-1.0259 0.786-1.3155 1.3639-0.2979 0.6159-0.3866 1.2866-0.5198 1.9484-0.1333 0.6618-0.3407 1.374-0.2621 2.0534 0.1691 1.4664 1.1942 2.658 2.6687 2.9245 1.3872 0.2514 2.7819 0.4551 4.1803 0.6286 6.3975 0.58529 12.33 0.67088 17.899 0.103 0.84728-0.06084 1.1341 0.18345 1.0408 1.0333-0.86018 8.2095-1.6016 15.772-2.3632 23.05-0.2389 1.2394-1.078 2.0006-2.3023 2.279-1.1217 0.2553-2.2676 0.3893-3.4179 0.3998-1.2753 0.0069-2.55-0.0497-3.8253-0.0428-1.3613 0.0076-3.0288-0.1182-4.0797-1.1313-0.9233-0.89-1.0509-2.2835-1.1766-3.4884-0.73481-7.0464-1.4562-13.977-2.0496-19.675-0.0717-0.6845-0.5563-1.3545-1.32-1.3199-0.6536 0.0289-1.3965 0.5845-1.3199 1.3199 0.81438 7.8132 1.5812 15.192 2.291 21.991 0.2873 2.6171 2.286 4.0276 4.7611 4.4248 1.4456 0.2325 2.9264 0.2803 4.3934 0.3042 1.8806 0.0302 3.78 0.1024 5.6297-0.2382 2.741-0.5028 4.7976-2.3331 5.0911-5.1722 0.90983-8.8804 1.5778-15.392 2.4116-23.519 0.05345-0.64763 0.11424-0.71456 0.7593-0.829 0.7838-0.1528 1.533-0.4136 2.0905-1.0101 0.8875-0.9497 1.0641-2.1879 0.7504-3.4361zm-2.8774 1.5028c-0.2815 0.2677-0.7058 0.3922-1.125 0.4544-4.7014 0.6977-9.4713 1.0509-14.224 0.895-3.4016-0.1163-6.7673-0.494-10.135-0.9698-1.2935-0.32214-1.1195-1.0715-1.0207-2.2872 0.1018-0.5078 0.2967-1.1848 0.9007-1.257 0.9428-0.1107 2.0376 0.2872 2.9704 0.4286 1.1229 0.1714 2.2501 0.3086 3.3815 0.4117 4.8283 0.44 9.7377 0.3715 14.545-0.2722 0.8761-0.1177 1.7492-0.2545 2.619-0.4104 0.775-0.1389 1.6342-0.3997 2.1025 0.4029 0.3211 0.5468 0.3639 1.2784 0.3142 1.8963-0.0153 0.2692-0.1329 0.5223-0.3287 0.7077z" fill="#0D0C22"/>
 <g clip-rule="evenodd" fill-rule="evenodd">
  <g fill="#0d0c23">
   <path d="m81.13 40.193c-0.2746 0.524-0.6521 0.9803-1.1324 1.3675-0.4803 0.3875-1.0407 0.7029-1.6812 0.9458-0.6405 0.2435-1.2851 0.4069-1.9331 0.4902-0.6483 0.0835-1.2775 0.0763-1.8872-0.0229-0.61-0.0986-1.1289-0.2998-1.5555-0.604l0.4806-4.9916c0.4419-0.1518 0.9983-0.3076 1.6695-0.4672 0.671-0.1594 1.3611-0.2736 2.0704-0.3418 0.7092-0.0686 1.3799-0.0605 2.0131 0.0228 0.6324 0.0836 1.1321 0.2848 1.4981 0.6041 0.1982 0.1822 0.3662 0.3796 0.5035 0.5925 0.137 0.2128 0.2209 0.4331 0.2516 0.661 0.0761 0.6382-0.0229 1.2194-0.2974 1.7436zm-6.9772-10.633c0.3204-0.1975 0.7055-0.3725 1.1553-0.5246 0.4498-0.1515 0.9112-0.2582 1.384-0.3189 0.4725-0.0605 0.9339-0.0686 1.384-0.0229 0.4495 0.0457 0.8465 0.1709 1.1896 0.3759 0.343 0.2054 0.5984 0.5017 0.7661 0.8889 0.1677 0.3878 0.2136 0.8779 0.1373 1.4704-0.061 0.4711-0.2482 0.8701-0.5604 1.1966-0.3126 0.327-0.6942 0.6003-1.1437 0.8206-0.93645 0.47615-1.9244 0.62666-2.8824 0.8091-0.65665 0.10554-1.2342 0.10047-1.8872 0.1368zm9.4477 7.4074c-0.2441-0.5315-0.572-0.9987-0.9835-1.4018-0.4118-0.4025-0.9002-0.6949-1.4641-0.8773 0.2438-0.1975 0.484-0.509 0.7206-0.9346 0.2362-0.4251 0.4382-0.8889 0.6059-1.3903 0.1678-0.5017 0.2824-1.0066 0.3433-1.5158 0.0607-0.5089 0.0378-0.9458-0.0685-1.3108-0.2597-0.9114-0.6674-1.6256-1.2241-2.1424-0.5569-0.5164-1.2046-0.8735-1.9443-1.0713-0.7398-0.1969-1.5556-0.2391-2.4477-0.1252s-1.8036 0.338-2.7334 0.6723c0-0.0758 0.0075-0.1556 0.0229-0.2392 0.0148-0.0832 0.0226-0.1708 0.0226-0.2622 0-0.2279-0.1143-0.4251-0.343-0.5925-0.2287-0.1672-0.4919-0.2658-0.7891-0.2964-0.2974-0.0301-0.5873 0.0341-0.8694 0.1937-0.2824 0.1596-0.4768 0.4526-0.5833 0.8773-0.53219 6.1712-1.0201 11.806-1.5785 17.482 0.0459 0.4103 0.1602 0.7296 0.3433 0.9574 0.1829 0.2282 0.3964 0.3649 0.6405 0.4103 0.2438 0.0457 0.4995 0.0035 0.7662-0.1255 0.2667-0.1286 0.4994-0.3533 0.6979-0.6723 0.6097 0.3343 1.2961 0.5509 2.0588 0.6498 0.7623 0.0986 1.536 0.0986 2.3219 0 0.785-0.0989 1.559-0.2848 2.3217-0.5587 0.7623-0.2732 1.4562-0.6153 2.0816-1.0253 0.6251-0.4104 1.1513-0.8779 1.5785-1.4019 0.4269-0.5245 0.709-1.0904 0.8462-1.698 0.1373-0.6231 0.1753-1.246 0.1144-1.8691-0.061-0.6229-0.2136-1.2-0.4574-1.7324z"/>
   <path d="m105.56 50.586c-0.153 0.5543-0.332 1.0598-0.538 1.5158-0.205 0.4557-0.434 0.8238-0.686 1.1052-0.252 0.281-0.522 0.399-0.812 0.3536-0.229-0.0309-0.374-0.1752-0.434-0.4332-0.062-0.2588-0.062-0.5777 0-0.9574 0.24718-1.5033 0.72478-2.4892 1.852-4.0685 0.321-0.4329 0.656-0.794 1.007-1.0826 0.076 0.0911 0.11 0.3189 0.103 0.6839-0.024 1.0105-0.28114 1.977-0.492 2.8832zm8.109-11.476c-0.206-0.2278-0.457-0.3568-0.755-0.3874-0.297-0.0304-0.598 0.1367-0.903 0.5014-0.61981 1.1396-1.7144 1.944-2.642 2.6666-0.298 0.1978-0.53 0.3421-0.698 0.4332-0.061-0.4861-0.096-1.0103-0.103-1.5728-0.0511-1.4302-0.0479-2.6986 0.32-4.1937 0.145-0.8357 0.355-1.6563 0.629-2.4619 0-0.4251-0.099-0.7709-0.297-1.0369-0.199-0.2658-0.439-0.4332-0.721-0.5015-0.282-0.0682-0.571-0.0303-0.869 0.114-0.297 0.1446-0.553 0.4068-0.766 0.7862-0.43653 1.2547-0.94208 2.4564-1.43 3.59-0.55968 1.3301-1.1769 2.4677-2.196 3.4988-0.435 0.4711-0.908 0.8397-1.418 1.1055-0.511 0.266-1.064 0.3837-1.659 0.3533-0.2744-0.076-0.4727-0.281-0.5945-0.6156-0.1222-0.334-0.1945-0.7521-0.2171-1.2535-0.0229-0.5014 0-1.0523 0.0685-1.6526 0.12468-1.2146 0.17778-1.851 0.6521-3.4757 0.137-0.5318 0.266-0.9803 0.389-1.3449 0.183-0.4404 0.183-0.8093 0-1.1055-0.183-0.2963-0.435-0.4936-0.755-0.5927-0.3204-0.0986-0.6561-0.0946-1.0067 0.0115-0.3509 0.1064-0.6025 0.3418-0.7548 0.7065-0.2595 0.6234-0.496 1.322-0.7093 2.097-0.2136 0.7749-0.3851 1.5768-0.5145 2.4046-0.1301 0.8285-0.2026 1.6491-0.2177 2.462-9e-4 0.0529 0.0017 0.1032 0.0014 0.1558-0.3325 0.8834-0.6494 1.5511-0.9504 1.9978-0.3889 0.5778-0.8277 0.8285-1.3155 0.7521-0.2139-0.091-0.3543-0.3036-0.4228-0.6381-0.0694-0.334-0.092-0.7443-0.0694-1.231 0.0235-0.4858 0.0807-1.0366 0.1718-1.6523 0.33831-2.0657 0.78068-3.8995 1.1899-5.8008-0.0154-0.5318-0.1718-0.9381-0.4693-1.2194-0.2972-0.2808-0.713-0.391-1.2464-0.3306-0.366 0.1521-0.6371 0.3499-0.8123 0.5928-0.1756 0.2429-0.3167 0.5546-0.4232 0.9343-0.0612 0.1978-0.1526 0.5928-0.2745 1.1856-0.30793 1.5461-0.7367 3.0418-1.1437 4.4444-0.2595 0.8357-0.5491 1.5921-0.8692 2.2679-0.3204 0.676-0.6712 1.2194-1.0523 1.6297-0.3813 0.41-0.7931 0.5775-1.2354 0.5014-0.2441-0.0457-0.4002-0.2964-0.4687-0.7521-0.0688-0.456-0.0801-1.0178-0.0345-1.6867 0.1758-2.1621 0.68438-4.3968 1.0981-6.3592 0.1219-0.5471 0.2058-0.9118 0.2516-1.0939 0-0.4407-0.0995-0.7938-0.2974-1.0601-0.1985-0.2654-0.4385-0.4329-0.7206-0.5014-0.2824-0.0682-0.572-0.0304-0.8692 0.1139-0.2974 0.1446-0.5528 0.4069-0.7664 0.7863-0.0763 0.4103-0.1756 0.8854-0.2975 1.4247-0.52221 2.1368-0.76636 4.0384-0.9948 5.9489-0.0383 0.4638-0.0575 0.9536-0.0575 1.4701 0 0.517 0.038 1.0297 0.1147 1.5386 0.076 0.5092 0.2133 0.9765 0.4115 1.4016 0.1982 0.4256 0.4765 0.7749 0.8352 1.0485 0.3581 0.2735 0.812 0.4253 1.3611 0.456 0.5638 0.0301 1.0557-0.0113 1.4754-0.1255 0.4193-0.1139 0.8004-0.2926 1.1437-0.5358 0.343-0.2426 0.6556-0.5315 0.9379-0.8661 0.2818-0.3339 0.5604-0.6986 0.835-1.0939 0.2591 0.5778 0.5946 1.0257 1.0064 1.3449 0.4118 0.319 0.8466 0.5092 1.3039 0.5697 0.4574 0.0604 0.9229-0.0035 1.3956-0.1938 0.4725-0.1896 0.8994-0.5126 1.281-0.9687 0.251-0.2796 0.4879-0.5974 0.7102-0.9487 0.0943 0.1645 0.1947 0.3233 0.3076 0.4699 0.3738 0.4867 0.881 0.8206 1.5215 1.0031 0.6861 0.1825 1.3565 0.2131 2.0125 0.0914 0.656-0.1215 1.281-0.3421 1.876-0.661 0.595-0.3193 1.148-0.7027 1.659-1.1512 0.51-0.4482 0.956-0.9152 1.338-1.4019-0.0193 0.68563-0.0345 1.3826-0.046 2.006-0.763 0.532-1.483 1.1702-2.162 1.9145-1.412 1.4729-2.3953 3.0003-2.985 4.9458-0.29 0.8666-0.431 1.6754-0.423 2.4278 7e-3 0.7521 0.187 1.4091 0.537 1.9712 0.351 0.5625 0.923 0.965 1.716 1.2082 0.824 0.2585 1.548 0.2657 2.173 0.0228 0.626-0.2432 1.171-0.646 1.636-1.2081s0.846-1.242 1.144-2.0398c0.297-0.7978 0.533-1.6297 0.709-2.4957 0.175-0.8661 0.286-1.7176 0.331-2.5527 0.046-0.836 0.046-1.5809 0-2.2341 1.312-0.5468 2.387-1.2382 3.226-2.0742 0.839-0.8351 1.532-1.7167 2.081-2.6438 0.168-0.2278 0.225-0.5014 0.172-0.8203-0.053-0.3193-0.183-0.5928-0.389-0.8207z"/>
   <path d="m142.53 37.652c0.045-0.3493 0.114-0.718 0.205-1.1055 0.092-0.3875 0.206-0.7637 0.344-1.1283 0.137-0.3646 0.297-0.6798 0.48-0.9459 0.183-0.2657 0.378-0.4557 0.583-0.5699 0.206-0.1136 0.416-0.1024 0.629 0.0341 0.229 0.1371 0.37 0.4257 0.424 0.8661 0.053 0.4412 0 0.912-0.161 1.4134-0.16 0.5017-0.446 0.9724-0.857 1.4131-0.412 0.441-0.969 0.7293-1.67 0.8661-0.031-0.2123-0.023-0.4936 0.023-0.8432zm7.926 0.9342c-0.252-0.0754-0.492-0.0832-0.721-0.0225s-0.374 0.2203-0.434 0.4788c-0.123 0.4861-0.317 0.9838-0.584 1.4927-0.267 0.5092-0.595 0.9915-0.983 1.4475-0.389 0.4558-0.828 0.8586-1.316 1.2079-0.488 0.3496-0.999 0.6003-1.532 0.7521-0.535 0.1674-0.976 0.1862-1.327 0.0569-0.351-0.1286-0.629-0.3493-0.835-0.6607s-0.355-0.6876-0.446-1.1283c-0.092-0.4407-0.145-0.8964-0.16-1.3677 0.869 0.061 1.643-0.0946 2.322-0.4673 0.678-0.3719 1.254-0.8661 1.727-1.4814 0.472-0.6153 0.831-1.3067 1.075-2.0742 0.243-0.7671 0.381-1.5308 0.411-2.2907 0.016-0.7142-0.091-1.318-0.32-1.8119-0.228-0.4936-0.537-0.8779-0.926-1.1511-0.389-0.2736-0.835-0.4332-1.338-0.4786-0.503-0.0457-1.015 0.0228-1.533 0.205-0.626 0.2128-1.155 0.5584-1.59 1.0372-0.434 0.4786-0.797 1.0335-1.086 1.6639-0.29 0.6306-0.519 1.3105-0.687 2.0397-0.168 0.7296-0.29 1.4476-0.366 2.1543-0.068 0.6341-0.105 1.2405-0.118 1.8257-0.25468 0.63556-0.64024 1.2806-0.923 1.8096-0.312 0.5168-0.659 0.9499-1.04 1.2992-0.382 0.3496-0.778 0.4711-1.19 0.3647-0.244-0.0605-0.377-0.3421-0.4-0.8432-0.023-0.5017 3e-3 -1.1246 0.08-1.8692 0.20908-1.6852 0.3451-3.3004 0.412-4.9004 0-0.6839-0.13-1.3408-0.389-1.9718-0.26-0.6301-0.614-1.1546-1.064-1.5725-0.45-0.4181-0.972-0.6954-1.567-0.8319-0.595-0.137-1.235-0.0457-1.921 0.2733-0.687 0.3192-1.232 0.7674-1.636 1.3449-0.404 0.5777-0.774 1.1852-1.109 1.8234-0.123-0.4863-0.301-0.938-0.538-1.3561-0.237-0.4179-0.526-0.7825-0.869-1.0942-0.344-0.3112-0.729-0.5544-1.155-0.7293-0.427-0.1744-0.878-0.262-1.35-0.262-0.458 0-0.881 0.0876-1.27 0.262-0.389 0.1749-0.743 0.3988-1.064 0.6723-0.32 0.2738-0.609 0.5812-0.869 0.9233-0.259 0.3418-0.488 0.6801-0.686 1.0141-0.031-0.395-0.065-0.7406-0.103-1.0372-0.038-0.2961-0.107-0.5468-0.206-0.7519-0.099-0.2053-0.24-0.3608-0.423-0.4672-0.183-0.1062-0.442-0.1597-0.777-0.1597-0.168 0-0.336 0.0342-0.504 0.1024-0.168 0.0685-0.317 0.1637-0.446 0.2851-0.13 0.122-0.229 0.2698-0.297 0.4445-0.069 0.1746-0.088 0.3762-0.058 0.604 0.015 0.1674 0.058 0.3684 0.126 0.6041 0.069 0.2356 0.134 0.5436 0.195 0.923 0.06 0.3799 0.11 0.8397 0.148 1.379 0.11407 1.619-0.0292 3.2633-0.137 4.7295-0.099 1.0485-0.256 2.2642-0.469 3.6466-0.03 0.3193 0.092 0.5778 0.366 0.7753 0.275 0.1972 0.587 0.3111 0.938 0.3418 0.351 0.0303 0.683-0.0307 0.995-0.1822 0.313-0.1524 0.492-0.4181 0.538-0.7978 0.0939-1.6311 0.42556-3.1852 0.743-4.6726 0.31774-1.4971 0.69994-2.7183 1.464-4.1483 0.298-0.5471 0.606-0.9837 0.927-1.3105 0.32-0.3267 0.655-0.4901 1.006-0.4901 0.427 0 0.759 0.1935 0.995 0.5809 0.236 0.3878 0.404 0.8857 0.504 1.493 0.099 0.6081 0.144 1.2732 0.137 1.9946-8.4e-4 1.3437-0.13963 2.6067-0.275 3.8748-0.068 0.5242-0.118 0.8854-0.148 1.0826 0 0.3496 0.133 0.6266 0.4 0.8319 0.266 0.205 0.564 0.3268 0.892 0.3647 0.328 0.0381 0.637-0.0229 0.926-0.1825 0.29-0.1596 0.458-0.4288 0.504-0.8091 0.152-1.0939 0.362-2.1915 0.629-3.2932 0.266-1.1017 0.572-2.0892 0.915-2.9631 0.343-0.8738 0.724-1.5881 1.144-2.1427 0.419-0.5543 0.865-0.8319 1.338-0.8319 0.243 0 0.431 0.1674 0.56 0.5014 0.13 0.3343 0.195 0.79 0.195 1.3675-9e-4 0.94003-0.19458 1.8493-0.343 2.701-0.092 0.4789-0.172 0.9687-0.241 1.4701-0.17553 1.01-0.18874 1.9344 0.012 2.8948 0.076 0.5011 0.221 0.9765 0.434 1.4244 0.214 0.4485 0.507 0.8282 0.881 1.1396 0.374 0.3115 0.85 0.4673 1.43 0.4673 0.869 0 1.639-0.1862 2.31-0.5584 0.77998-0.40452 1.2819-1.0449 1.799-1.5548 0.25428 0.79207 0.96347 1.3663 1.45 1.8171 0.563 0.3646 1.227 0.5659 1.99 0.6041 0.762 0.0376 1.593-0.103 2.493-0.4219 0.671-0.2432 1.254-0.5471 1.75-0.9117 0.495-0.3647 0.941-0.8091 1.338-1.3334 0.397-0.5242 0.759-1.1283 1.087-1.8119 0.328-0.6841 0.659-1.4663 0.995-2.348 0.061-0.2426 4e-3 -0.4591-0.171-0.6494-0.176-0.1897-0.389-0.3227-0.641-0.3991z"/>
  </g>
  <path d="m162.89 36.043c-0.077 0.4484-0.18 0.9426-0.309 1.4816-0.13 0.5396-0.294 1.098-0.492 1.6754-0.198 0.5775-0.442 1.098-0.732 1.5612-0.29 0.4638-0.621 0.8319-0.995 1.1055-0.374 0.2735-0.804 0.3875-1.293 0.3418-0.244-0.0301-0.431-0.1972-0.56-0.5014-0.13-0.3037-0.198-0.6914-0.206-1.1625-8e-3 -0.4707 0.034-0.9875 0.126-1.5499 0.091-0.5618 0.232-1.113 0.423-1.6525 0.191-0.539 0.423-1.037 0.698-1.493 0.274-0.4557 0.591-0.8091 0.949-1.0598s0.751-0.3681 1.178-0.3533c0.427 0.0153 0.885 0.2278 1.373 0.6382-0.031 0.1978-0.084 0.5207-0.16 0.9687zm8.132 1.7436c-0.237-0.1214-0.481-0.1478-0.732-0.0795-0.252 0.0682-0.431 0.3001-0.538 0.6951-0.061 0.4257-0.198 0.9268-0.411 1.5043-0.214 0.5774-0.477 1.1248-0.79 1.6409-0.312 0.5168-0.671 0.9462-1.075 1.288-0.404 0.342-0.835 0.4979-1.292 0.467-0.382-0.0301-0.649-0.2238-0.801-0.581-0.153-0.3571-0.233-0.805-0.24-1.3449-8e-3 -0.5389 0.046-1.1468 0.16-1.8231 0.114-0.6761 0.252-1.3484 0.412-2.0175 0.16-0.6683 0.324-1.3105 0.492-1.9258 0.167-0.6154 0.304-1.1358 0.412-1.5612 0.122-0.38 0.083-0.7027-0.115-0.969-0.198-0.2654-0.446-0.4557-0.743-0.5696-0.298-0.114-0.599-0.1443-0.904-0.0911s-0.503 0.2166-0.595 0.4898c-0.9-0.7749-1.765-1.1928-2.596-1.2535-0.832-0.0607-1.598 0.1217-2.299 0.5471-0.702 0.4254-1.323 1.0407-1.864 1.8463-0.542 0.8056-0.98 1.6829-1.316 2.6325-0.335 0.9496-0.545 1.9186-0.629 2.9061-0.084 0.9878-0.019 1.8882 0.195 2.7011 0.213 0.8128 0.59 1.4779 1.132 1.994 0.541 0.5168 1.277 0.7753 2.207 0.7753 0.412 0 0.809-0.0836 1.19-0.2507 0.381-0.1675 0.732-0.365 1.052-0.5928 0.32-0.2279 0.602-0.4673 0.847-0.718 0.243-0.2507 0.434-0.4595 0.571-0.6269 0.107 0.5471 0.283 1.0109 0.527 1.3906 0.243 0.3796 0.522 0.6916 0.835 0.9343 0.312 0.2428 0.64 0.4216 0.983 0.5358 0.343 0.1139 0.675 0.1709 0.995 0.1709 0.717 0 1.388-0.2432 2.013-0.7296 0.625-0.4858 1.186-1.0826 1.682-1.789 0.495-0.7067 0.903-1.451 1.223-2.2338 0.321-0.7825 0.534-1.4776 0.641-2.0857 0.107-0.2279 0.087-0.467-0.057-0.7177-0.145-0.2507-0.336-0.4367-0.572-0.5587z" fill="#0D0C23"/>
  <path d="m212.19 50.37c-0.13 0.5165-0.332 0.9537-0.607 1.3105-0.274 0.3571-0.617 0.5433-1.029 0.5587-0.259 0.015-0.457-0.1218-0.595-0.4104-0.137-0.2888-0.232-0.661-0.285-1.1167-0.054-0.456-0.077-0.9652-0.069-1.5273 7e-3 -0.5622 0.03-1.1168 0.069-1.6639 0.037-0.5468 0.083-1.0563 0.137-1.5271 0.053-0.4713 0.095-0.8353 0.125-1.0939 0.519 0.0608 0.95 0.2846 1.293 0.6723 0.343 0.3875 0.606 0.847 0.789 1.3791 0.183 0.5317 0.29 1.1054 0.321 1.7208 0.03 0.6153-0.02 1.1812-0.149 1.6979zm-8.281 0c-0.13 0.5165-0.332 0.9537-0.606 1.3105-0.275 0.3571-0.618 0.5433-1.03 0.5587-0.259 0.015-0.457-0.1218-0.594-0.4104-0.138-0.2888-0.233-0.661-0.286-1.1167-0.054-0.456-0.077-0.9652-0.069-1.5273 8e-3 -0.5622 0.03-1.1168 0.069-1.6639 0.037-0.5468 0.083-1.0563 0.137-1.5271 0.053-0.4713 0.095-0.8353 0.126-1.0939 0.518 0.0608 0.949 0.2846 1.292 0.6723 0.343 0.3875 0.606 0.847 0.789 1.3791 0.183 0.5317 0.29 1.1054 0.321 1.7208 0.03 0.6153-0.02 1.1812-0.149 1.6979zm-8.498-12.946c-0.016 0.3643-0.05 0.6873-0.103 0.9684-0.054 0.2816-0.126 0.4597-0.217 0.5358-0.168-0.0914-0.374-0.3265-0.618-0.7067-0.244-0.3797-0.435-0.8094-0.572-1.288-0.137-0.4785-0.18-0.9493-0.126-1.4131 0.053-0.4632 0.294-0.8238 0.721-1.0826 0.167-0.0911 0.312-0.057 0.434 0.1026s0.221 0.3913 0.298 0.6952c0.076 0.3042 0.129 0.6535 0.16 1.0485 0.03 0.3953 0.038 0.7749 0.023 1.1399zm-2.025 4.547c-0.236 0.2504-0.5 0.467-0.789 0.6495-0.29 0.1824-0.587 0.3192-0.892 0.4103-0.305 0.0914-0.58 0.1139-0.824 0.0682-0.686-0.1364-1.212-0.4331-1.578-0.8888-0.366-0.4558-0.599-0.9913-0.698-1.6066-0.099-0.6156-0.088-1.2729 0.035-1.9718 0.121-0.6989 0.327-1.3484 0.617-1.9487s0.641-1.117 1.052-1.5499c0.412-0.4332 0.862-0.7027 1.35-0.8094-0.183 0.775-0.244 1.5768-0.183 2.4047 0.061 0.8282 0.259 1.6069 0.595 2.3362 0.213 0.4412 0.469 0.8434 0.766 1.2081 0.298 0.3649 0.66 0.6763 1.087 0.9346-0.122 0.2585-0.302 0.5129-0.538 0.7636zm25.312-4.3192c0.045-0.3493 0.114-0.7183 0.206-1.1057 0.091-0.3872 0.206-0.7634 0.343-1.1281 0.137-0.3649 0.297-0.6801 0.48-0.9458 0.183-0.2658 0.377-0.456 0.583-0.5699 0.206-0.114 0.416-0.1027 0.629 0.0341 0.229 0.137 0.37 0.4256 0.424 0.866 0.053 0.441 0 0.9117-0.16 1.4134-0.161 0.5014-0.446 0.9725-0.858 1.4129-0.412 0.4412-0.969 0.7295-1.67 0.8663-0.031-0.2125-0.023-0.4936 0.023-0.8432zm9.219 0c0.045-0.3493 0.114-0.7183 0.205-1.1057 0.092-0.3872 0.206-0.7634 0.344-1.1281 0.137-0.3649 0.297-0.6801 0.48-0.9458 0.183-0.2658 0.378-0.456 0.583-0.5699 0.206-0.114 0.416-0.1027 0.629 0.0341 0.229 0.137 0.37 0.4256 0.424 0.866 0.053 0.441 0 0.9117-0.161 1.4134-0.16 0.5014-0.446 0.9725-0.857 1.4129-0.412 0.4412-0.969 0.7295-1.67 0.8663-0.031-0.2125-0.023-0.4936 0.023-0.8432zm8.567 1.3333c-0.176-0.1897-0.389-0.3227-0.641-0.399-0.252-0.0758-0.492-0.0833-0.721-0.0226-0.229 0.0608-0.374 0.2204-0.434 0.4786-0.122 0.4864-0.317 0.984-0.584 1.4927-0.267 0.5095-0.594 0.9918-0.983 1.4475s-0.828 0.8588-1.315 1.2081c-0.489 0.3496-1 0.6003-1.533 0.7518-0.534 0.1678-0.976 0.1866-1.327 0.0573-0.351-0.129-0.629-0.3493-0.835-0.6607-0.206-0.3118-0.354-0.6877-0.446-1.1286-0.091-0.4404-0.145-0.8961-0.16-1.3675 0.869 0.061 1.643-0.0945 2.322-0.4673 0.678-0.3721 1.254-0.8663 1.727-1.4816 0.473-0.6151 0.831-1.3065 1.075-2.0739s0.381-1.5308 0.412-2.2907c0.015-0.7143-0.092-1.3183-0.321-1.8122-0.228-0.4936-0.537-0.8776-0.926-1.1509-0.389-0.2738-0.835-0.4332-1.338-0.4788-0.503-0.0457-1.015 0.0231-1.533 0.205-0.625 0.2131-1.155 0.5586-1.589 1.0372-0.435 0.4789-0.798 1.0338-1.087 1.6638-0.29 0.631-0.519 1.3105-0.687 2.0401-0.168 0.7292-0.29 1.4475-0.365 2.1539-0.075 0.6856-0.115 1.3418-0.124 1.9698-0.28213 0.6786-0.79848 1.3012-1.169 1.8252-0.389 0.4557-0.828 0.8588-1.315 1.2081-0.489 0.3496-0.999 0.6003-1.533 0.7518-0.534 0.1678-0.976 0.1866-1.327 0.0573-0.351-0.129-0.629-0.3493-0.835-0.6607-0.205-0.3118-0.354-0.6877-0.446-1.1286-0.091-0.4404-0.145-0.8961-0.16-1.3675 0.869 0.061 1.643-0.0945 2.322-0.4673 0.678-0.3721 1.254-0.8663 1.727-1.4816 0.472-0.6151 0.831-1.3065 1.075-2.0739s0.381-1.5308 0.412-2.2907c0.015-0.7143-0.092-1.3183-0.32-1.8122-0.229-0.4936-0.538-0.8776-0.927-1.1509-0.389-0.2738-0.835-0.4332-1.338-0.4788-0.503-0.0457-1.014 0.0231-1.533 0.205-0.625 0.2131-1.155 0.5586-1.589 1.0372-0.435 0.4789-0.798 1.0338-1.087 1.6638-0.29 0.631-0.519 1.3105-0.686 2.0401-0.168 0.7292-0.29 1.4475-0.366 2.1539-0.044 0.3985-0.073 0.7848-0.094 1.1642-0.64251 0.59004-1.4527 1.0915-2.102 1.5253-0.58 0.3421-1.183 0.6232-1.807 0.8435-0.626 0.2204-1.267 0.3534-1.922 0.3988l1.418-15.134c0.092-0.3192 0.046-0.6-0.137-0.8432s-0.42-0.4103-0.709-0.5014c-0.29-0.0913-0.599-0.0835-0.927 0.0226-0.328 0.1067-0.598 0.3499-0.812 0.7292-0.62405 4.217-1.0004 9.0005-1.315 12.855-4e-3 0.0486-7e-3 0.0926-0.011 0.1406-0.133 0.1127-0.263 0.2264-0.401 0.338-0.526 0.4256-1.079 0.8091-1.658 1.1511-0.58 0.3421-1.182 0.6232-1.807 0.8435-0.626 0.2204-1.267 0.3534-1.922 0.3988l1.418-15.134c0.092-0.3192 0.046-0.6-0.137-0.8432s-0.42-0.4103-0.709-0.5014c-0.29-0.0913-0.599-0.0835-0.927 0.0226-0.328 0.1067-0.598 0.3499-0.812 0.7292-0.62332 4.2171-1.0004 9.0005-1.315 12.855-2e-3 0.022-3e-3 0.0419-5e-3 0.0639-0.239 0.1108-0.501 0.2079-0.784 0.2895-0.29 0.0838-0.618 0.1333-0.984 0.1483 0.061-0.2738 0.111-0.5777 0.149-0.912 0.10465-0.73293 0.0939-1.4553 0.114-2.1424-8e-3 -0.3649-0.027-0.6989-0.057-1.0031-0.076-0.6529-0.217-1.2723-0.423-1.8576-0.206-0.5847-0.484-1.0745-0.835-1.4701-0.351-0.395-0.789-0.661-1.316-0.7975-0.525-0.1368-1.139-0.0914-1.841 0.1365-1.037-0.1365-1.971-0.0414-2.802 0.2851-0.831 0.3271-1.552 0.8016-2.162 1.4244-0.61 0.6235-1.109 1.3562-1.498 2.1997-0.389 0.8432-0.648 1.7095-0.778 2.5981-0.055 0.3768-0.082 0.7518-0.09 1.126-0.236 0.4817-0.494 0.9028-0.779 1.2561-0.404 0.5014-0.824 0.9117-1.258 1.2307-0.435 0.3192-0.866 0.5624-1.293 0.7295-0.427 0.1675-0.808 0.2814-1.143 0.3418-0.397 0.0761-0.778 0.0839-1.144 0.0229-0.366-0.0605-0.702-0.2354-1.006-0.5243-0.245-0.2125-0.432-0.5546-0.561-1.0256-0.13-0.4711-0.206-1.0063-0.229-1.6069-0.023-0.6003 0-1.2272 0.069-1.8804s0.186-1.2726 0.354-1.8576 0.381-1.1092 0.641-1.573c0.259-0.463 0.564-0.7938 0.915-0.9913 0.198 0.0307 0.32 0.1481 0.366 0.3531 0.046 0.2053 0.057 0.4485 0.034 0.7295-0.023 0.2814-0.057 0.57-0.103 0.8661-0.046 0.2964-0.068 0.5436-0.068 0.7408 0.076 0.4103 0.224 0.7296 0.446 0.9574 0.22 0.2279 0.469 0.3612 0.743 0.3988 0.275 0.0381 0.545-0.0263 0.812-0.1938 0.267-0.1668 0.484-0.4328 0.652-0.7978 0.015 0.0154 0.038 0.0229 0.069 0.0229l0.32-2.8945c0.092-0.3953 0.03-0.7446-0.183-1.0485-0.214-0.3039-0.496-0.4789-0.846-0.5243-0.443-0.6382-1.041-0.9762-1.796-1.0144-0.755-0.0378-1.529 0.2091-2.322 0.7409-0.488 0.3499-0.919 0.8319-1.292 1.4472-0.374 0.6157-0.679 1.2992-0.915 2.0513-0.237 0.7522-0.405 1.5465-0.504 2.3822-0.099 0.8356-0.118 1.6488-0.057 2.4385 0.061 0.7905 0.202 1.5351 0.423 2.2337 0.221 0.6992 0.53 1.2842 0.927 1.755 0.335 0.4103 0.716 0.7107 1.143 0.9007s0.873 0.3074 1.339 0.3531c0.465 0.0454 0.926 0.0263 1.384-0.057 0.457-0.0833 0.892-0.201 1.303-0.3534 0.534-0.1972 1.084-0.4482 1.648-0.7521 0.564-0.3036 1.105-0.6685 1.624-1.0942 0.273-0.2238 0.535-0.4678 0.789-0.7295 0.116 0.2857 0.245 0.5621 0.4 0.8209 0.412 0.6836 0.968 1.2385 1.67 1.6639 0.701 0.4253 1.563 0.63 2.585 0.6153 1.098-0.0153 2.112-0.2923 3.043-0.8319 0.93-0.539 1.692-1.3336 2.287-2.3818 0.891 0 1.767-0.1464 2.629-0.437-0.0573 0.6292-0.0788 1.2771-0.113 1.9186-0.015 0.5014-0.049 1.1205-0.103 1.8573-0.053 0.7371-0.087 1.512-0.102 2.3249-0.015 0.8128 0.015 1.6334 0.091 2.4619 0.076 0.8279 0.236 1.5803 0.48 2.2566 0.244 0.6758 0.591 1.2495 1.041 1.7208 0.45 0.4708 1.041 0.7521 1.773 0.8432 0.778 0.1061 1.449-0.0306 2.013-0.4103 0.564-0.38 1.022-0.9002 1.373-1.5612 0.35-0.6613 0.598-1.4247 0.743-2.2907 0.145-0.8661 0.187-1.7362 0.126-2.61-0.061-0.8739-0.222-1.698-0.481-2.4726-0.259-0.7753-0.618-1.4135-1.075-1.9152 0.275-0.0754 0.603-0.2197 0.984-0.4328 0.56101-0.30153 0.99352-0.61284 1.474-0.9193-0.037 0.5384-0.056 0.9224-0.056 1.1474-0.015 0.5014-0.049 1.1205-0.103 1.8573-0.053 0.7371-0.088 1.512-0.103 2.3249-0.015 0.8128 0.015 1.6334 0.092 2.4619 0.076 0.8279 0.236 1.5803 0.48 2.2566 0.244 0.6758 0.591 1.2495 1.041 1.7208 0.45 0.4708 1.041 0.7521 1.773 0.8432 0.777 0.1061 1.448-0.0306 2.013-0.4103 0.564-0.38 1.021-0.9002 1.373-1.5612 0.35-0.6613 0.598-1.4247 0.743-2.2907 0.145-0.8661 0.186-1.7362 0.126-2.61-0.062-0.8739-0.222-1.698-0.481-2.4726-0.259-0.7753-0.617-1.4135-1.075-1.9152 0.275-0.0754 0.602-0.2197 0.984-0.4328 0.381-0.2126 0.773-0.452 1.178-0.718 0.21-0.1382 0.419-0.2808 0.627-0.4274 0.078 0.7431 0.247 1.3949 0.516 1.9432 0.328 0.6688 0.774 1.1852 1.339 1.5502 0.564 0.3643 1.227 0.5659 1.99 0.6037 0.762 0.0376 1.593-0.1026 2.494-0.4219 0.67-0.2428 1.254-0.5468 1.749-0.9114 0.496-0.3649 0.942-0.8094 1.338-1.3333 0.023-0.0304 0.045-0.0633 0.067-0.094 0.071 0.2128 0.149 0.4173 0.242 0.6067 0.328 0.6688 0.774 1.1852 1.339 1.5502 0.563 0.3643 1.227 0.5659 1.99 0.6037 0.762 0.0376 1.593-0.1026 2.493-0.4219 0.671-0.2428 1.255-0.5468 1.75-0.9114 0.496-0.3649 0.942-0.8094 1.338-1.3333 0.397-0.5246 0.759-1.1286 1.087-1.8122 0.328-0.6839 0.659-1.466 0.995-2.3477 0.061-0.2429 4e-3 -0.4595-0.171-0.6495z" fill="#0d0c23"/>
 </g>
</svg>`;

export const paypal = `
<svg xmlns="http://www.w3.org/2000/svg" width="150" height="40">
<path fill="#253B80" d="M46.211 6.749h-6.839a.95.95 0 0 0-.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zM66.654 13.075h-3.275a.57.57 0 0 0-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zM84.096 13.075h-3.291a.954.954 0 0 0-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0-.912-.678h-3.234a.57.57 0 0 0-.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0-.468-.895z"/>
<path fill="#179BD7" d="M94.992 6.749h-6.84a.95.95 0 0 0-.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zM115.434 13.075h-3.273a.567.567 0 0 0-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zM119.295 7.23l-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0-.562-.659h-3.16a.571.571 0 0 0-.562.482z"/>
<path fill="#253B80" d="M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1-1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0-.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1-.096.035H7.266z"/>
<path fill="#179BD7" d="M23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.326c-.661 0-1.218.48-1.321 1.132L6.596 26.83l-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 0 0-1.336-1.03z"/>
<path fill="#222D65" d="M21.754 7.151a9.757 9.757 0 0 0-1.203-.267 15.284 15.284 0 0 0-2.426-.177h-7.352a1.172 1.172 0 0 0-1.159.992L8.05 17.605l-.045.289a1.336 1.336 0 0 1 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0-1.017-.429 9.045 9.045 0 0 0-.277-.087z"/>
<path fill="#253B80" d="M9.614 7.699a1.169 1.169 0 0 1 1.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 0 1 1.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392C20.378.682 17.853 0 14.622 0h-9.38c-.66 0-1.223.48-1.325 1.133L.01 25.898a.806.806 0 0 0 .795.932h5.791l1.454-9.225 1.564-9.906z"/>
</svg>`;

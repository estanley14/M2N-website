import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NavDesktop from "../components/navDesktop"
import NavTablet from "../components/navTablet"
import NavMobile from "../components/navMobile"

//IMAGES
import line762x from "../import/img/line-7-6@2x.png"
import line862x from "../import/img/line-8-6@2x.png" 
import line962x from "../import/img/line-9-6@2x.png" 
import line1062x from "../import/img/line-10-6@2x.png"
import line1162x from "../import/img/line-11-6@2x.png"
import line1262x from "../import/img/line-12-6@2x.png"
import line1362x from "../import/img/line-13-6@2x.png"
import line7162x from "../import/img/path-71-6@2x.png"
import line1562x from "../import/img/line-15-6@2x.png"
import icnBrfcs2x from "../import/img/icon-briefcase@2x.png"
import ln772x from "../import/img/line-7-7@2x.png"
import ln872x from "../import/img/line-8-7@2x.png"
import ln972x from "../import/img/line-9-7@2x.png"
import ln1072x from "../import/img/line-10-7@2x.png"
import ln1172x from "../import/img/line-11-7@2x.png"
import ln1272x from "../import/img/line-12-7@2x.png"
import ln1372x from "../import/img/line-13-7@2x.png"
import pth7172x from "../import/img/path-71-7@2x.png"
import ln1572x from "../import/img/line-15-7@2x.png"
import vctr1352x from "../import/img/vector-135@2x.png"
import txtrLnsGrn1x from "../import/img/texture-lines-green@1x.png"
import vctr1362x from "../import/img/vector-136@2x.png"
import crclShp1x from "../import/img/circle-shape@1x.png"
import vctr1372x from "../import/img/vector-137@2x.png"
import sbtrct32x from "../import/img/subtract-3@2x.png"
import elpse792x from "../import/img/ellipse-7-9@2x.png"
import elpse892x from "../import/img/ellipse-8-9@2x.png"
import elpse7102x from "../import/img/ellipse-7-10@2x.png"
import elpse8102x from "../import/img/ellipse-8-10@2x.png"
import elpse7112x from"../import/img/ellipse-7-11@2x.png"
import elpse8112x from "../import/img/ellipse-8-11@2x.png"
import pth312x from "../import/img/path-3-1@2x.png"
import pth412x from "../import/img/path-4-1@2x.png"
import pth52x from "../import/img/path-5@2x.png"
import img12x from "../import/img/image-1@2x.png"
import pth112x from "../import/img/path-1-1@2x.png"
import pth612x from "../import/img/path-6-1@2x.png"
import pth712x from "../import/img/path-7-1@2x.png"
import pth321x from "../import/img/path-3-2@1x.png"
import ln782x from "../import/img/line-7-8@2x.png"
import ln822x from "../import/img/line-8-2@2x.png"
import ln922x from "../import/img/line-9-2@2x.png"
import ln1082x from "../import/img/line-10-8@2x.png"
import ln1122x from "../import/img/line-11-2@2x.png"
import ln1222x from "../import/img/line-12-2@2x.png"
import ln1322x from "../import/img/line-13-2@2x.png"
import pth7122x from "../import/img/path-71-2@2x.png"
import ln1582x from "../import/img/line-15-8@2x.png"
import phn1x from "../import/img/phone@1x.png"
import scrn1x from "../import/img/screen@1x.png"
import glss1x from "../import/img/glass@1x.png"
import clrDdge1x from "../import/img/color-dodge@1x.png"
import ovrshdw1x from "../import/img/over-shadow@1x.png"
import phn11x from "../import/img/phone-1@1x.png"
import scrn11x from "../import/img/screen-1@1x.png"
import glss11x from "../import/img/glass-1@1x.png"
import ClrDdge11x from "../import/img/color-dodge-1@1x.png"
import ln792x from "../import/img/line-7-9@2x.png"
import ln832x from "../import/img/line-8-3@2x.png"
import ln932x from "../import/img/line-9-3@2x.png"
import ln1092x from "../import/img/line-10-9@2x.png"
import ln1192x from "../import/img/line-11-9@2x.png"
import ln1232x from "../import/img/line-12-3@2x.png"
import ln1332x from "../import/img/line-13-3@2x.png"
import pth7132x from "../import/img/path-71-3@2x.png"
import ln1592x from "../import/img/line-15-9@2x.png"
import abstrctShps932x from "../import/img/abstract-shapes-9-3@2x.png"
import pth7022x from "../import/img/path-70-2@2x.png"
import objct1x from "../import/img/object@1x.png"
import chngeClr1x from "../import/img/change-color@1x.png"
import shdw1x from "../import/img/shadow@1x.png"
import scrn21x from "../import/img/screen-2@1x.png"
import mckp2x from "../import/img/mockup@2x.png"
import brdr1x from "../import/img/border@1x.png"
import objct12x from "../import/img/object-1@2x.png"
import chngClr12x from "../import/img/change-color-1@2x.png"
import shdw12x from "../import/img/shadow-1@2x.png"
import scrn32x from "../import/img/screen-3@2x.png"
import mckp12x from "../import/img/mockup-1@2x.png"
import brdr12x from "../import/img/border-1@2x.png"
import grdntDrpStrk1x from "../import/img/gradient-drop-stroke@1x.png"
import ln7102x from "../import/img/line-7-10@2x.png"
import ln8102x from "../import/img/line-8-10@2x.png"
import ln9102x from "../import/img/line-9-10@2x.png"
import ln10102x from "../import/img/line-10-10@2x.png"
import ln11102x from "../import/img/line-11-10@2x.png"
import ln12102x from "../import/img/line-12-10@2x.png"
import ln13102x from "../import/img/line-13-10@2x.png"
import pth71102x from "../import/img/path-71-10@2x.png"
import ln15102x from "../import/img/line-15-10@2x.png"
import crcl1x from "../import/img/circle@1x.png"
import cmbndShp2x from "../import/img/combined-shape@2x.png"
import pth2x from "../import/img/path@2x.png"
import vctr462x from "../import/img/vector-46@2x.png"
import vctr472x from "../import/img/footer-logo-desktop.png"
import vctr482x from "../import/img/vector-48@2x.png"
import vctr492x from "../import/img/vector-49@2x.png"
import vctr502x from "../import/img/vector-50@2x.png"
import vctr512x from "../import/img/vector-51@2x.png"
import vctr522x from "../import/img/vector-52@2x.png"
import vctr532x from "../import/img/vector-53@2x.png"
import vctr542x from "../import/img/vector-54@2x.png"
import vctr552x from "../import/img/vector-55@2x.png"
import vctr1492x from "../import/img/vector-149@2x.png"
import vctr1502x from "../import/img/vector-150@2x.png"
import vctr592x from "../import/img/vector-59@2x.png"
import vctr602x from "../import/img/vector-60@2x.png"
import vctr612x from "../import/img/vector-61@2x.png"
import vctr622x from "../import/img/vector-62@2x.png"
import vctr632x from "../import/img/vector-63@2x.png"
import vctr642x from "../import/img/vector-64@2x.png"
import vctr652x from "../import/img/vector-65@2x.png"
import vctr662x from "../import/img/vector-66@2x.png"
import vctr672x from "../import/img/vector-67@2x.png"
import vctr682x from "../import/img/vector-68@2x.png"
import vctr692x from "../import/img/vector-69@2x.png"
import vctr702x from "../import/img/vector-70@2x.png"
import vctr712x from "../import/img/vector-71@2x.png"
import vctr722x from "../import/img/vector-72@2x.png"
import vctr732x from "../import/img/vector-73@2x.png"
import vctr742x from "../import/img/vector-74@2x.png"
import vctr752x from "../import/img/vector-75@2x.png"
import vctr762x from "../import/img/vector-76@2x.png"
import vctr772x from "../import/img/vector-77@2x.png"
import vctr782x from "../import/img/vector-78@2x.png"
import vctr792x from "../import/img/vector-79@2x.png"
import vctr802x from "../import/img/vector-80@2x.png"
import vctr812x from "../import/img/vector-81@2x.png"
import vctr822x from "../import/img/vector-82@2x.png"
import vctr832x from "../import/img/vector-83@2x.png"
import vctr842x from "../import/img/vector-84@2x.png"
import vctr852x from "../import/img/vector-85@2x.png"
import vctr862x from "../import/img/vector-86@2x.png"
import vctr1802x from "../import/img/vector-180@2x.png"
import pth351x from "../import/img/path-3-5@1x.png"
import ln7222x from "../import/img/line-7-22@2x.png"
import ln8222x from "../import/img/line-8-22@2x.png"
import ln10222x from "../import/img/line-10-22@2x.png"
import ln11222x from "../import/img/line-11-22@2x.png"
import ln12162x from "../import/img/line-12-16@2x.png"
import ln13162x from "../import/img/line-13-16@2x.png"
import pth71222x from "../import/img/path-71-22@2x.png"
import ln15222x from "../import/img/line-15-22@2x.png"
import phn22x from "../import/img/phone-2@2x.png"
import scrn42x from "../import/img/screen-4@2x.png"
import glss22x from "../import/img/glass-2@2x.png"
import clrDdge22x from "../import/img/color-dodge-2@2x.png"
import ovrShdw12x from "../import/img/over-shadow-1@2x.png"
import phn32x from "../import/img/phone-3@2x.png"
import scrn52x from "../import/img/screen-5@2x.png"
import glss32x from "../import/img/glass-3@2x.png"
import clrDdge32x from "../import/img/color-dodge-3@2x.png"
import crclShp11x from "../import/img/circle-shape-1@1x.png"
import vctr4452x from "../import/img/vector-445@2x.png"
import sbtrct82x from "../import/img/subtract-8@2x.png"
import elpse8252x from "../import/img/ellipse-8-25@2x.png"
import elpse8262x from "../import/img/ellipse-8-26@2x.png"
import pth642x from "../import/img/path-6-4@2x.png"
import img112x from "../import/img/image-1-1@2x.png"
import ln7232x from "../import/img/line-7-23@2x.png"
import ln8232x from "../import/img/line-8-23@2x.png"
import ln9232x from "../import/img/line-9-23@2x.png"
import ln10232x from "../import/img/line-10-23@2x.png"
import ln11232x from "../import/img/line-11-23@2x.png"
import ln12232x from "../import/img/line-12-23@2x.png"
import ln13232x from "../import/img/line-13-23@2x.png"
import pth71232x from "../import/img/path-71-23@2x.png"
import ln15232x from "../import/img/line-15-23@2x.png"
import icnBrfcs12x from "../import/img/icon-briefcase-1@2x.png"
import ln7242x from "../import/img/line-7-24@2x.png"
import ln8242x from "../import/img/line-8-24@2x.png"
import ln9242x from "../import/img/line-9-24@2x.png"
import ln10242x from "../import/img/line-10-24@2x.png"
import ln11242x from "../import/img/line-11-24@2x.png"
import ln12242x from "../import/img/line-12-24@2x.png"
import ln13242x from "../import/img/line-13-24@2x.png"
import pth71242x from "../import/img/path-71-24@2x.png"
import ln15242x from "../import/img/line-15-24@2x.png"
import vctr4472x from "../import/img/vector-447@2x.png"
import txtrLnsGrn11x from "../import/img/texture-lines-green-1@1x.png"
import vctr4482x from "../import/img/vector-448@2x.png"
import ln7252x from "../import/img/line-7-25@2x.png"
import ln8252x from "../import/img/line-8-25@2x.png"
import ln10252x from "../import/img/line-10-25@2x.png"
import ln11252x from "../import/img/line-11-25@2x.png"
import ln12172x from "../import/img/line-12-17@2x.png"
import ln13172x from "../import/img/line-13-17@2x.png"
import pth71252x from "../import/img/path-71-25@2x.png"
import ln15252x from "../import/img/line-15-25@2x.png"
import abstrctShps9322x from "../import/img/abstract-shapes-9-3-2@2x.png"
import pth7052x from "../import/img/path-70-5@2x.png"
import objct21x from "../import/img/object-2@1x.png"
import mckp22x from "../import/img/mockup-2@2x.png"
import mckp32x from "../import/img/mockup-3@2x.png"
import grdntDrpStrk11x from "../import/img/gradient-drop-stroke-1@1x.png"
import ln7262x from "../import/img/line-7-26@2x.png"
import ln8262x from "../import/img/line-8-26@2x.png"
import ln10262x from "../import/img/line-10-26@2x.png"
import ln11262x from "../import/img/line-11-26@2x.png"
import ln12262x from "../import/img/line-12-26@2x.png"
import ln13262x from "../import/img/line-13-26@2x.png"
import pth71262x from "../import/img/path-71-26@2x.png"
import ln15262x from "../import/img/line-15-26@2x.png"
import crcl11x from "../import/img/circle-1@1x.png"
import vctr4492x from "../import/img/footer-logo-desktop.png"
import vctr4502x from "../import/img/vector-450@2x.png"
import vctr3142x from "../import/img/vector-314@2x.png"
import vctr3152x from "../import/img/vector-315@2x.png"
import vctr3162x from "../import/img/vector-316@2x.png"
import vctr3172x from "../import/img/vector-317@2x.png"
import vctr3182x from "../import/img/vector-318@2x.png"
import vctr3192x from "../import/img/vector-319@2x.png"
import vctr3202x from "../import/img/vector-320@2x.png"
import vctr4582x from "../import/img/vector-458@2x.png"
import vctr3222x from "../import/img/vector-322@2x.png"
import vctr3232x from "../import/img/vector-323@2x.png"
import vctr3242x from "../import/img/vector-324@2x.png"
import vctr3252x from "../import/img/vector-325@2x.png"
import vctr3262x from "../import/img/vector-326@2x.png"
import vctr3272x from "../import/img/vector-327@2x.png"
import vctr3282x from "../import/img/vector-328@2x.png"
import vctr3292x from "../import/img/vector-329@2x.png"
import vctr3302x from "../import/img/vector-330@2x.png"
import vctr3312x from "../import/img/vector-331@2x.png"
import vctr3322x from "../import/img/vector-332@2x.png"
import vctr3332x  from "../import/img/vector-333@2x.png"
import vctr3342x from "../import/img/vector-334@2x.png"
import vctr3352x from "../import/img/vector-335@2x.png"
import vctr3362x from "../import/img/vector-336@2x.png"
import vctr3372x from "../import/img/vector-337@2x.png"
import vctr4752x from "../import/img/vector-475@2x.png"
import vctr3392x from "../import/img/vector-339@2x.png"
import vctr3402x from "../import/img/vector-340@2x.png"
import vctr3412x from "../import/img/vector-341@2x.png"
import vctr3422x from "../import/img/vector-342@2x.png"
import vctr3432x from "../import/img/vector-343@2x.png"
import vctr3442x from "../import/img/vector-344@2x.png"
import vctr3452x from "../import/img/vector-345@2x.png"
import vctr3462x from "../import/img/vector-346@2x.png"
import vctr3472x from "../import/img/vector-347@2x.png"
import vctr3482x from "../import/img/vector-348@2x.png"
import vctr4862x from "../import/img/vector-486@2x.png"
import vctr3502x from "../import/img/vector-350@2x.png"
import vctr3512x from "../import/img/vector-351@2x.png"
import vctr3522x from "../import/img/vector-352@2x.png"
import cmbndShp52x from "../import/img/combined-shape-5@2x.png"
import vctr3532x from "../import/img/vector-353@2x.png"
import ln7272x from "../import/img/line-7-27@2x.png"
import ln8272x from "../import/img/line-8-27@2x.png"
import ln9272x from "../import/img/line-9-27@2x.png"
import ln10272x from "../import/img/line-10-27@2x.png"
import ln11272x from "../import/img/line-11-27@2x.png"
import ln12272x from "../import/img/line-12-27@2x.png"
import ln13272x  from "../import/img/line-13-27@2x.png"
import pth71272x from "../import/img/path-71-27@2x.png"
import ln15272x from "../import/img/line-15-27@2x.png"
import ln7282x from "../import/img/line-7-28@2x.png"
import ln8282x from "../import/img/line-8-28@2x.png"
import ln9282x from "../import/img/line-9-28@2x.png"
import ln10282x from "../import/img/line-10-28@2x.png"
import ln11282x from "../import/img/line-11-28@2x.png"
import ln12282x from "../import/img/line-12-28@2x.png"
import ln13282x from "../import/img/line-13-28@2x.png"
import pth7282x from "../import/img/path-71-28@2x.png"
import ln15282x from "../import/img/line-15-28@2x.png"
import vctr4912x from "../import/img/vector-491@2x.png"
import vctr4922x from "../import/img/vector-492@2x.png"
import pth132x from "../import/img/path-1-3@2x.png"
import pth372x from "../import/img/path-3-7@2x.png"
import ln7292x from "../import/img/line-7-29@2x.png"
import ln8292x from "../import/img/line-8-29@2x.png"
import ln9292x from "../import/img/line-9-29@2x.png"
import ln10292x from "../import/img/line-10-29@2x.png"
import ln11292x from "../import/img/line-11-29@2x.png"
import ln12292x from "../import/img/line-12-29@2x.png"
import ln13292x from "../import/img/line-13-29@2x.png"
import pth71292x from "../import/img/path-71-29@2x.png"
import ln15292x from "../import/img/line-15-29@2x.png"
import phn42x from "../import/img/phone-4@2x.png"
import scrn82x from "../import/img/screen-8@2x.png"
import glss42x from "../import/img/glass-4@2x.png"
import clrDdge42x from "../import/img/color-dodge-4@2x.png"
import ovrShdw22x from "../import/img/over-shadow-2@2x.png"
import phn52x from "../import/img/phone-5@2x.png"
import scrn92x from "../import/img/screen-9@2x.png"
import glss52x from "../import/img/glass-5@2x.png"
import clrDdge52x from "../import/img/color-dodge-5@2x.png"
import crclShp22x from "../import/img/circle-shape-2@2x.png"
import vctr4932x from "../import/img/vector-493@2x.png"
import sbtrct92x from "../import/img/subtract-9@2x.png"
import elpse7272x from "../import/img/ellipse-7-27@2x.png"
import elpse8272x from "../import/img/ellipse-8-27@2x.png"
import elpse7282x from "../import/img/ellipse-7-28@2x.png"
import elpse8282x from "../import/img/ellipse-8-28@2x.png"
import elpse7292x from "../import/img/ellipse-7-29@2x.png"
import elpse8292x from "../import/img/ellipse-8-29@2x.png"
import pth382x from "../import/img/path-3-8@2x.png"
import pth452x from "../import/img/path-4-5@2x.png"
import pth652x from "../import/img/path-6-5@2x.png"
import pth752x from "../import/img/path-7-5@2x.png"
import img122x from "../import/img/image-1-2@2x.png"
import grdntDrpStrk21x from "../import/img/gradient-drop-stroke-2@1x.png"
import ln8302x from "../import/img/line-8-30@2x.png"
import ln10302x from "../import/img/line-10-30@2x.png"
import ln11302x from "../import/img/line-11-30@2x.png"
import pth71302x from "../import/img/path-71-30@2x.png"
import ln15302x from "../import/img/line-15-30@2x.png"
import crcl21x from "../import/img/circle-2@1x.png"
import ln7312x from "../import/img/line-7-31@2x.png"
import ln8312x from "../import/img/line-8-31@2x.png"
import ln9312x from "../import/img/line-9-31@2x.png"
import ln10312x from "../import/img/line-10-31@2x.png"
import ln11312x from "../import/img/line-11-31@2x.png"
import ln12312x from "../import/img/line-12-31@2x.png"
import ln13312x from "../import/img/line-13-31@2x.png"
import pth71312x from "../import/img/path-71-31@2x.png"
import ln15312x from "../import/img/line-15-31@2x.png"
import abstrctShps9332x from "../import/img/abstract-shapes-9-3-3@2x.png"
import pth7062x from "../import/img/path-70-6@2x.png"
import objct41x from "../import/img/object-4@1x.png"
import chngClr42x from "../import/img/change-color-4@2x.png"
import shdw42x from "../import/img/shadow-4@2x.png"
import scrn102x from "../import/img/screen-10@2x.png"
import mckp42x from "../import/img/mockup-4@2x.png"
import brdr42x from "../import/img/border-4@2x.png"
import objct52x from "../import/img/object-5@2x.png"
import chngClr52x from "../import/img/change-color-5@2x.png"
import shdw52x from "../import/img/shadow-5@2x.png"
import scrn112x from "../import/img/screen-11@2x.png"
import mckp52x from "../import/img/mockup-5@2x.png"
import brdr52x from "../import/img/border-5@2x.png"
import vctr3132x from "../import/img/vector-313@2x.png"
import vctr4072x from "../import/img/vector-407@2x.png"
import vctr3212x from "../import/img/vector-321@2x.png"
import vctr4182x from "../import/img/vector-418@2x.png"
import vctr4192x from "../import/img/vector-419@2x.png"
import vctr4212x from "../import/img/vector-421@2x.png"
import vctr3382x from "../import/img/vector-338@2x.png"
import vctr3492x from "../import/img/vector-349@2x.png"
import ln7362x from "../import/img/line-7-36@2x.png"
import ln8362x from "../import/img/line-8-36@2x.png"
import ln10362x from "../import/img/line-10-36@2x.png"
import ln11362x from "../import/img/line-11-36@2x.png"
import ln12362x from "../import/img/line-12-36@2x.png"
import ln13362x from "../import/img/line-13-36@2x.png"
import ln15362x from "../import/img/line-15-36@2x.png"
import ln7372x from "../import/img/line-7-37@2x.png"
import ln8372x from "../import/img/line-8-37@2x.png"
import ln9372x from "../import/img/line-9-37@2x.png"
import ln10372x from "../import/img/line-10-37@2x.png"
import ln11372x from "../import/img/line-11-37@2x.png"
import ln12372x from "../import/img/line-12-37@2x.png"
import ln13372x from "../import/img/line-13-37@2x.png"
import pth71372x from "../import/img/path-71-37@2x.png"
import ln15372x from "../import/img/line-15-37@2x.png"
import phn82x from "../import/img/phone-8@2x.png"
import scrn182x from "../import/img/screen-18@2x.png"
import glss82x from "../import/img/glass-8@2x.png"
import clrDdg82x from "../import/img/color-dodge-8@2x.png"
import ovrshdw42x from "../import/img/over-shadow-4@2x.png"
import phn92x from "../import/img/phone-9@2x.png"
import scrn192x from "../import/img/screen-19@2x.png"
import glss92x from "../import/img/glass-9@2x.png"
import clrDdg92x from "../import/img/color-dodge-9@2x.png"
import crclShp32x from "../import/img/circle-shape-3@2x.png"
import grdntDrpStrk32x from "../import/img/gradient-drop-stroke-3@2x.png"
import crcl31x from "../import/img/circle-3@1x.png"
import ln7402x from "../import/img/line-7-40@2x.png"
import ln10402x from "../import/img/line-10-40@2x.png"
import objct101x from "../import/img/object-10@1x.png"
import scrn202x from "../import/img/screen-20@2x.png"
import mckp102x from "../import/img/mockup-10@2x.png"
import mckp112x from "../import/img/mockup-11@2x.png"
import vctr6542x from "../import/img/vector-654@2x.png"


const SecondPage = () => (
  <Layout>
    <Seo title="Mpower" />
    <input type="hidden" id="anPageName" name="page" value="mpower-mobile-320px" />
    <div className="mpower-home-dekstop-1440px screen">
      <div className="content-features-desktop-C61RwL">
        <div className="contentsection-zxGWQX">
          <div id="member-development" className="h1-R67MJ0 dmsans-bold-big-stone-62px">Member Development</div>
          <p className="p-R67MJ0 dmsans-normal-abbey-16px">
            Members only coursework, discussion groups and guest lectures by globally recognized thought leaders that
            empower, educate, and engage minority professionals.
          </p>
        </div>
        <div className="featuregroup-zxGWQX">
          <div className="texturelinesred-ADw2RY">
            <div className="texturelinesred-Hs6QyQ">
              <img className="line7-RuWFcn" src={line762x} />
              <img className="line8-RuWFcn" src={line862x} />
              <img className="line9-RuWFcn" src={line962x} />
              <img className="line10-RuWFcn" src={line1062x} />
              <img className="line11-RuWFcn" src={line1162x} />
              <img className="line12-RuWFcn" src={line1262x} />
              <img className="line13-RuWFcn" src={line1362x} />
              <img className="path71-RuWFcn" src={line7162x} />
              <img className="line15-RuWFcn" src={line1562x} />
            </div>
          </div>
          <div className="card1-ADw2RY">
            <div className="icon1-jztRZd">
              <div className="circle-h7iPQl"></div>
              <img className="iconbriefcase-h7iPQl" src={icnBrfcs2x} />
            </div>
            <div className="h2-jztRZd dmsans-bold-mine-shaft-28px">Empowering...</div>
            <p className="p-jztRZd dmsans-medium-raven-16px">
              Membership to use their lived experience in ways that provide great value to their employing organizations.
            </p>
          </div>
          <div className="texturelinesblue-ADw2RY">
            <div className="texturelinesblue-aqZn8e">
              <img className="line7-exOM24" src={ln772x} />
              <img className="line8-exOM24" src={ln872x} />
              <img className="line9-exOM24" src={ln972x} />
              <img className="line10-exOM24" src={ln1072x} />
              <img className="line11-exOM24" src={ln1172x} />
              <img className="line12-exOM24" src={ln1272x} />
              <img className="line13-exOM24" src={ln1372x} />
              <img className="path71-exOM24" src={pth7172x} />
              <img className="line15-exOM24" src={ln1572x} />
            </div>
          </div>
          <div className="card2-ADw2RY">
            <div className="iconpeople-2V2nig">
              <div className="circle-GwGDZ0"></div>
              <div className="iconpeople-GwGDZ0"><img className="vector-JjXJil" src={vctr1352x} /></div>
            </div>
            <div className="h2-2V2nig dmsans-bold-mine-shaft-28px">Engaging...</div>
            <p className="p-2V2nig dmsans-medium-raven-16px">
              With inspirational stories of individual, organizational and community success in the areas of diversity, equity, and inclusion.
            </p>
          </div>
          <div className="texturelinesgreen-ADw2RY">
            <img className="texturelinesgreen-jl5MyS" src={txtrLnsGrn1x} />
          </div>
          <div className="card3-ADw2RY">
            <div className="iconbook-Wu3DRp">
              <div className="circle-WiztLf"></div>
              <div className="iconbook-WiztLf"><img className="vector-ekKiNB" src={vctr1362x} /></div>
            </div>
            <div className="h2-Wu3DRp dmsans-bold-mine-shaft-28px">Educating...</div>
            <p className="p-Wu3DRp dmsans-medium-raven-16px">
              With learning that improves job performance, increases business acumen, and broadens industry expertise for career advancement.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-desktop-C61RwL">
        <img className="circleshape-lGn21Y" src={crclShp1x} />
        <div className="contentlist-lGn21Y">
          <div className="contentlist-S3RQva">
            <div className="logo-wxA5cc">
              <div className="group-teZpKv"><img className="vector-H4tOCj" src={vctr1372x} /></div>
              <img className="subtract-teZpKv" src={sbtrct32x} />
              <div className="group-79-teZpKv">
                <img className="ellipse-7-HYsq9x" src={elpse792x} />
                <img className="ellipse-8-HYsq9x" src={elpse892x} />
              </div>
              <div className="group-80-teZpKv">
                <img className="ellipse-7-1JeYdz" src={elpse7102x} />
                <img className="ellipse-8-1JeYdz" src={elpse8102x} />
              </div>
              <div className="group-81-teZpKv">
                <img className="ellipse-7-SIAR9J" src={elpse7112x} />
                <img className="ellipse-8-SIAR9J" src={elpse8112x} />
              </div>
            </div>
            <p className="p-wxA5cc dmsans-normal-white-16px-2">
              Combining a dynamic newsfeed, on-demand video and 1:1/1:x video conferencing, MPower members have
              unlimited access to the knowledge, resources, tools, and mentorship to accelerate and advance their
              careers.
            </p>
          </div>
          <Link to="/mpower-app">
            <div className="download-buttons-S3RQva">
              <div className="app-store-YSfhkS">
                <img className="path-3-8Z77rx" src={pth312x} />
                <img className="path-4-8Z77rx" src={pth412x} />
                <img className="path-5-8Z77rx" src={pth52x} />
                <div className="group-2-8Z77rx"><img className="path-6-HBjPCY" src={pth612x} /></div>
                <div className="group-3-8Z77rx"><img className="path-7-s5YiaN" src={pth712x} /></div>
              </div>
              <img className="image-1-YSfhkS" src={img12x} />
            </div>
          </Link>
        </div>
        <div className="shapes-lGn21Y">
          <img className="path1-sFKqij" src={pth112x} />
          <img className="path3-sFKqij" src={pth321x} />
          <div className="group-1-sFKqij">
            <img className="line7-6As1mU" src={ln782x} />
            <img className="line8-6As1mU" src={ln822x} />
            <img className="line9-6As1mU" src={ln922x} />
            <img className="line10-6As1mU" src={ln1082x} />
            <img className="line11-6As1mU" src={ln1122x} />
            <img className="line12-6As1mU" src={ln1222x} />
            <img className="line13-6As1mU" src={ln1322x} />
            <img className="path71-6As1mU" src={pth7122x} />
            <img className="line15-6As1mU" src={ln1582x} />
          </div>
        </div>
        <div className="image-lGn21Y">
          <div className="x2-txx6A8">
            <img className="phone-YeOw8T" src={phn1x} />
            <img className="screen-YeOw8T" src={scrn1x} />
            <div className="glass-YeOw8T">
              <img className="glass-ylKXxH" src={glss1x} />
              <img className="color-dodge-ylKXxH" src={clrDdge1x} />
            </div>
            <img className="over-shadow-YeOw8T" src={ovrshdw1x} />
          </div>
          <div className="x1-txx6A8">
            <img className="phone-JS3Lgx" src={phn11x} />
            <img className="screen-JS3Lgx" src={scrn11x} />
            <div className="glass-JS3Lgx">
              <img className="glass-9WfYLE" src={glss11x} />
              <img className="color-dodge-9WfYLE" src={ClrDdge11x} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-careers-desktop-C61RwL">
        <div className="imgframe-xUubLU">
          <div className="group-1-qQskix">
            <img className="line7-SKRcoU" src={ln792x} />
            <img className="line8-SKRcoU" src={ln832x} />
            <img className="line9-SKRcoU" src={ln932x} />
            <img className="line10-SKRcoU" src={ln1092x} />
            <img className="line11-SKRcoU" src={ln1192x} />
            <img className="line12-SKRcoU" src={ln1232x} />
            <img className="line13-SKRcoU" src={ln1332x} />
            <img className="path71-SKRcoU" src={pth7132x} />
            <img className="line15-SKRcoU" src={ln1592x} />
          </div>
          <img className="abstract-shapes-9-3-qQskix" src={abstrctShps932x} />
          <img className="path70-qQskix" src={pth7022x} />
          <div className="group-82-qQskix">
            <div className="notebook-0gwOuy">
              <img className="object-aJB3k2" src={objct1x} />
              <div className="device-aJB3k2">
                <img className="change-color-3kNrtw" src={chngeClr1x} />
                <img className="shadow-3kNrtw" src={shdw1x} />
                <img className="screen-3kNrtw" src={scrn21x} />
              </div>
              <img className="mockup-aJB3k2" src={mckp2x} />
              <img className="border-aJB3k2" src={brdr1x} />
            </div>
            <div className="phone-0gwOuy">
              <img className="object-wjLxQR" src={objct12x} />
              <div className="device-wjLxQR">
                <img className="change-color-XFUxvJ" src={chngClr12x} />
                <img className="shadow-XFUxvJ" src={shdw12x} />
                <img className="screen-XFUxvJ" src={scrn32x} />
              </div>
              <img className="mockup-wjLxQR" src={mckp12x} />
              <img className="border-wjLxQR" src={brdr12x} />
            </div>
          </div>
        </div>
        <div className="contentlist-xUubLU">
          <div className="contentlist-tFi7aH">
            <div id="career-opportunities" className="h1-qszjdH dmsans-bold-big-stone-62px">Career Opportunities</div>
            <p className="p-qszjdH dmsans-normal-abbey-16px">
              Through the MPower platform and innovative services to support diverse and inclusive workforces, M2N
              provides members with career advancement opportunities.
            </p>
          </div>
          <div className="highlightlist-tFi7aH">
            <div className="highlight-desktop-Gx3fYW">
              <div className="prepare-i727951824-xEGWlc dmsans-bold-royal-blue-18px">Prepare</div>
              <p className="deliver-transfo-ires-i727951823-xEGWlc dmsans-normal-gray-14px">
                Deliver transformational DEI training to hiring managers and extended teams to prepare for and support
                their new hires.
              </p>
            </div>
            <div className="highlight-desktop-VOqVkx">
              <div className="prepare-i18251824-xjeE2T dmsans-bold-persimmon-18px">Recruit</div>
              <p className="deliver-transfo-hires-i18251823-xjeE2T dmsans-normal-gray-14px">
                Identify candidates for job opportunities based upon work experience and their activity and engagement
                in the MPower platform.
              </p>
            </div>
            <div className="highlight-desktop-j3mg2J">
              <div className="prepare-i18261824-SgfJ49 dmsans-bold-shamrock-18px">Connect</div>
              <p className="deliver-transfo-hires-i18261823-SgfJ49 dmsans-normal-gray-14px">
                Membership to organizations who promote a comprehensive approach to DEI.
              </p>
            </div>
            <div className="highlight-desktop-8oUlvX">
              <div className="prepare-i18271824-VA8krm dmsans-bold-cerulean-18px">Support</div>
              <p className="deliver-transfo-hires-i18271823-VA8krm dmsans-normal-gray-14px">
                On-going support for members to ensure they are fulfilled, engaged, and performing well in their new
                roles.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-desktop-C61RwL">
        <img className="gradientdropstroke-mUpcnA" src={grdntDrpStrk1x} />
        <div className="texturelines-mUpcnA">
          <img className="line7-q86OB5" src={ln7102x} />
          <img className="line8-q86OB5" src={ln8102x} />
          <img className="line9-q86OB5" src={ln9102x} />
          <img className="line10-q86OB5" src={ln10102x} />
          <img className="line11-q86OB5" src={ln11102x} />
          <img className="line12-q86OB5" src={ln12102x} />
          <img className="line13-q86OB5" src={ln13102x} />
          <img className="path71-q86OB5" src={pth71102x} />
          <img className="line15-q86OB5" src={ln15102x} />
        </div>
        <div className="contentsection-mUpcnA">
          <div className="contentrow-k06y50">
            <div className="h3-bWoHML dmsans-medium-white-40px">
             <span className="span2-BZYHNE dmsans-medium-white-40px">
              Explore the best tools to accelerate your professional development</span
              >
            </div>
            <Link to="/mpower-app">
              <div className="button-bWoHML">
                <div className="download-app-R8P0EF inter-semi-bold-white-20px">Explore MPower</div>
              </div>
            </Link>
          </div>
        </div>
        <Link to="/mpower-app">
          <div className="circleframe-mUpcnA">
            <img className="circle-GrkGeB" src={crcl1x} />
            <div className="highlightfree-GrkGeB"></div>
          </div>
        </Link>
      </div>
      {/* <div className="navbar-desktop-C61RwL">
        <div className="buttonrow-HPBo1Y">
          <div className="button-text-des-op-i63817129573-Wfh8x7 dmsans-bold-gunsmoke-14px-2">LOG IN</div>
          <div className="button-primary-desktop-Wfh8x7">
            <div className="font-i63817129575-eo3nRY valign-text-middle dmsans-bold-white-14px">SIGN UP</div>
          </div>
        </div>
        <div className="frame-HPBo1Y"><img className="vector-azHmrH" src="./import/img/vector-138@2x.png" /></div>
        <div className="frame-15-HPBo1Y">
          <div className="navitem-default-S6Kvjz smart-layers-pointers">
            <div className="textframe-FdqQMQ">
              <div className="home-i63817129687129678-EnImxV dmsans-bold-gunsmoke-14px">HOME</div>
            </div>
            <div className="indicator-FdqQMQ"></div>
          </div>
          <div className="navitem-hover-S6Kvjz">
            <div className="textframe-VBTaE4">
              <div className="home-i63817129691129683-jxM0bb dmsans-bold-white-14px">MPOWER</div>
            </div>
            <div className="indicator-VBTaE4 smart-layers-pointers"></div>
          </div>
          <div className="navitem-default-df9eD3">
            <div className="textframe-Eg20wO">
              <div className="b1-i63817129695129678-kHiIGi smart-layers-pointers dmsans-bold-gunsmoke-14px">COMPANY</div>
            </div>
            <div className="indicator-Eg20wO"></div>
          </div>
          <div className="navitem-default-OUMgDx">
            <div className="textframe-udu9xB">
              <div className="b1-i63817129699129678-vpgDzt smart-layers-pointers dmsans-bold-gunsmoke-14px">PARTNERS</div>
            </div>
            <div className="indicator-udu9xB"></div>
          </div>
        </div>
      </div> */}
        <NavDesktop theme="dark"  />
      <div className="footer-desktop-C61RwL">
        <div className="icongroup-VNfvnu">
          <div className="instagram-5R3sf4"><img className="combined-shape-TnWo79" src={cmbndShp2x} /></div>
          <div className="twitter-5R3sf4"><img className="path-4KRaeG" src={pth2x} /></div>
          <div className="linkedin-5R3sf4"><img className="vector-pXCSGN" src={vctr462x} /></div>
        </div>
        <p className="terms-and-conditions-VNfvnu dmsans-normal-white-14px-2">
          <span className="span0-zNn4YK dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-zNn4YK dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-zNn4YK dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <p className="company-VNfvnu dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <div className="divider-VNfvnu"></div>
        <div className="newslettersignup-VNfvnu">
          <div className="newsletter-vxY8x4 sourcesanspro-bold-white-16px">Newsletter</div>
          <form action="">
            <div className="input-default-vxY8x4">
              <div className="input-GVqwCV border-1px-celeste"></div>
              <input
                className="placeholder-GVqwCV dmsans-normal-gunsmoke-16px"
                name="email"
                placeholder="Your email"
                type="email"
                required
                />
            </div>
            {/* <div className="default-text-vxY8x4 smart-layers-pointers">
              <div className="font-kEobNx sourcesanspro-bold-white-16px">Subscribe</div>
            </div>
            <div className="button-primary-desktop-vxY8x4">
              <div className="font-U7FTmp valign-text-middle dmsans-bold-white-14px">SUBSCRIBE</div>
            </div> */}
            <input className="default-text-vxY8x4 sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
          </form>
        </div>
        <div className="column3-VNfvnu">
          <div className="platform-r3WsSG dmsans-bold-white-16px">Platform</div>
          <Link to="/mpower-app">
              <div className="ios-r3WsSG dmsans-normal-white-16px">iOS</div>
          </Link>
          <Link to="/mpower-app">
              <div className="android-r3WsSG dmsans-normal-white-16px">Android</div>
          </Link>
          <Link to="/mpower-app">
              <div className="browser-r3WsSG dmsans-normal-white-16px">Browser</div>
          </Link>
        </div>
        <div className="column2-VNfvnu">
          <div className="about-aRtUZh dmsans-bold-white-16px">
              <span className="span0-WJpm5A dmsans-bold-white-16px">About</span
              ><span className="span1-WJpm5A dmsans-normal-white-16px-2"><br /></span>
          </div>
          <Link to="/mpower">
              <div className="mpower-aRtUZh dmsans-normal-white-16px">MPower</div>
          </Link>
          <Link to="/partners">
              <div className="partnerships-aRtUZh dmsans-normal-white-16px">Partnerships</div>
          </Link>
          <Link to="/company">
              <div className="company-aRtUZh dmsans-normal-white-16px">Company</div>
          </Link>
        </div>
        <div className="column1-VNfvnu">
          <Link to="/">
            <div className="logo-dewRqW">
              <img className="vector-ouSEQ4" src={vctr472x} />
            </div>
          </Link>
          <p className="aboutblurb-dewRqW dmsans-normal-white-14px">
          A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
          </p>
        </div>
      </div>
    </div>
    <div className="mpower-desktop-1024px screen">
      <div className="hero-tablet-C61RwL">
        <div className="shapes-TfYITc">
          <img className="path1-lwI0Kf" src={pth112x} />
          <img className="path3-lwI0Kf" src={pth351x} />
          <div className="group-1-lwI0Kf">
            <img className="line7-HSzGSr" src={ln7222x} />
            <img className="line8-HSzGSr" src={ln8222x} />
            <img className="line9-HSzGSr" src={ln922x} />
            <img className="line10-HSzGSr" src={ln10222x} />
            <img className="line11-HSzGSr" src={ln11222x} />
            <img className="line12-HSzGSr" src={ln12162x} />
            <img className="line13-HSzGSr" src={ln13162x} />
            <img className="path71-HSzGSr" src={pth71222x} />
            <img className="line15-HSzGSr" src={ln15222x} />
          </div>
        </div>
        <div className="frame-44-TfYITc">
          <div className="x2-WUvxFJ">
            <img className="phone-JIwsTs" src={phn22x} />
            <img className="screen-JIwsTs" src={scrn42x} />
            <div className="glass-JIwsTs">
              <img className="glass-nPzDmH" src={glss22x} />
              <img className="color-dodge-nPzDmH" src={clrDdge22x} />
            </div>
            <img className="over-shadow-JIwsTs" src={ovrShdw12x} />
          </div>
          <div className="x1-WUvxFJ">
            <img className="phone-NxisNd" src={phn32x} />
            <img className="screen-NxisNd" src={scrn52x} />
            <div className="glass-NxisNd">
              <img className="glass-GmtgtS" src={glss32x} />
              <img className="color-dodge-GmtgtS" src={clrDdge32x} />
            </div>
          </div>
        </div>
        <img className="circleshape-TfYITc" src={crclShp11x} />
        <div className="contentlist-TfYITc">
          <div className="contentlist-dJAuae">
            <div className="logo-PrvBao">
              <div className="group-BexW5c"><img className="vector-35n3OB" src={vctr4452x} /></div>
              <img className="subtract-BexW5c" src={sbtrct82x} />
              <div className="group-79-BexW5c">
                <img className="ellipse-7-X1K4b7" src={elpse792x} />
                <img className="ellipse-8-X1K4b7" src={elpse892x} />
              </div>
              <div className="group-80-BexW5c">
                <img className="ellipse-7-Cf7uBn" src={elpse7102x} />
                <img className="ellipse-8-Cf7uBn" src={elpse8252x} />
              </div>
              <div className="group-81-BexW5c">
                <img className="ellipse-7-RurG7t" src={elpse7112x} />
                <img className="ellipse-8-RurG7t" src={elpse8262x} />
              </div>
            </div>
            <p className="p-PrvBao dmsans-normal-white-16px-2">
              Combining a dynamic newsfeed, on-demand video and 1:1/1:x video conferencing, MPower members have
              unlimited access to the knowledge, resources, tools, and mentorship to accelerate and advance their
              careers.
            </p>
          </div>
          <Link to="/mpower-app">
            <div className="download-buttons-dJAuae">
              <div className="app-store-t52Sia">
                <img className="path-3-YgZ69o" src={pth312x} />
                <img className="path-4-YgZ69o" src={pth412x} />
                <img className="path-5-YgZ69o" src={pth52x} />
                <div className="group-2-YgZ69o"><img className="path-6-3ciauk" src={pth642x} /></div>
                <div className="group-3-YgZ69o"><img className="path-7-XQj0he" src={pth712x} /></div>
              </div>
              <img className="image-1-t52Sia" src={img112x} />
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="navbar-tablet-C61RwL">
        <div className="buttonrow-Xq4ViJ">
          <div className="b1-i6384462736-DkfaGf dmsans-bold-gunsmoke-14px-2">LOG IN</div>
          <div className="button-primary-desktop-DkfaGf">
            <div className="font-i6384462738-GrCJVF valign-text-middle dmsans-bold-white-14px">SIGN UP</div>
          </div>
        </div>
        <div className="logo-Xq4ViJ"><img className="vector-paUNwS" src="./import/img/vector-446@2x.png" /></div>
        <div className="navlinks-Xq4ViJ">
          <div className="navitem-default-VcMpYN">
            <div className="textframe-XIn0T6">
              <div className="b1-i6384462742129678-pTXg1E dmsans-bold-gunsmoke-14px">HOME</div>
            </div>
            <div className="indicator-XIn0T6"></div>
          </div>
          <div className="navitem-hover-VcMpYN">
            <div className="textframe-x0oTG4">
              <div className="home-i6384462743129683-qVUPyA dmsans-bold-white-14px">MPOWER</div>
            </div>
            <div className="indicator-x0oTG4 smart-layers-pointers"></div>
          </div>
          <div className="navitem-default-h3NML7">
            <div className="textframe-HffetE">
              <div className="b1-i6384462744129678-poT6nI dmsans-bold-gunsmoke-14px">COMPANY</div>
            </div>
            <div className="indicator-HffetE"></div>
          </div>
          <div className="navitem-default-jBtke6">
            <div className="textframe-sUuHDU">
              <div className="b1-i6384462745129678-xtuTw9 dmsans-bold-gunsmoke-14px">PARTNERS</div>
            </div>
            <div className="indicator-sUuHDU"></div>
          </div>
        </div>
      </div> */}
      <NavTablet theme="dark" />
      <div className="content-features-tablet-C61RwL">
        <div className="contentsection-jCBd0u">
          <div id="member-development-mid" className="h1-U50gxg dmsans-bold-big-stone-62px">Member Development</div>
          <p className="p-U50gxg dmsans-normal-abbey-16px">
            Members only coursework, discussion groups and guest lectures by globally recognized thought leaders that
            empower, educate, and engage minority professionals.
          </p>
        </div>
        <div className="featuregroup-jCBd0u">
          <div className="texturelinesred-zTdpyh">
            <div className="texturelinesred-6jpk3v">
              <img className="line7-60slOB" src={ln7232x} />
              <img className="line8-60slOB" src={ln8232x} />
              <img className="line9-60slOB" src={ln9232x} />
              <img className="line10-60slOB" src={ln10232x} />
              <img className="line11-60slOB" src={ln11232x} />
              <img className="line12-60slOB" src={ln12232x} />
              <img className="line13-60slOB" src={ln13232x} />
              <img className="path71-60slOB" src={pth71232x} />
              <img className="line15-60slOB" src={ln15232x} />
            </div>
          </div>
          <div className="card1-zTdpyh">
            <div className="icon1-51wFGL">
              <div className="circle-ajWpfC"></div>
              <img className="iconbriefcase-ajWpfC" src={icnBrfcs12x} />
            </div>
            <div className="h2-51wFGL dmsans-bold-mine-shaft-28px">Empowering...</div>
            <p className="p-51wFGL dmsans-medium-raven-16px">
            Membership to use their lived experience in ways that provide great value to their employing organizations.
            </p>
          </div>
          <div className="texturelinesblue-zTdpyh">
            <div className="texturelinesblue-FjWpKn">
              <img className="line7-XwJ1hF" src={ln7242x} />
              <img className="line8-XwJ1hF" src={ln8242x} />
              <img className="line9-XwJ1hF" src={ln9242x} />
              <img className="line10-XwJ1hF" src={ln10242x} />
              <img className="line11-XwJ1hF" src={ln11242x} />
              <img className="line12-XwJ1hF" src={ln12242x} />
              <img className="line13-XwJ1hF" src={ln13242x} />
              <img className="path71-XwJ1hF" src={pth71242x} />
              <img className="line15-XwJ1hF" src={ln15242x} />
            </div>
          </div>
          <div className="card2-zTdpyh">
            <div className="iconpeople-g99tbA">
              <div className="circle-zNkhCW"></div>
              <div className="iconpeople-zNkhCW"><img className="vector-gjdSx4" src={vctr4472x} /></div>
            </div>
            <div className="h2-g99tbA dmsans-bold-mine-shaft-28px">Engaging...</div>
            <p className="p-g99tbA dmsans-medium-raven-16px">
              With inspirational stories of individual, organizational and community success in the areas of diversity, equity, and inclusion.
            </p>
          </div>
          <div className="texturelinesgreen-zTdpyh">
            <img className="texturelinesgreen-pSvlAM" src={txtrLnsGrn11x} />
          </div>
          <div className="card3-zTdpyh">
            <div className="iconbook-bIkiH5">
              <div className="circle-twj70c"></div>
              <div className="iconbook-twj70c"><img className="vector-8UNPvx" src={vctr4482x} /></div>
            </div>
            <div className="h2-bIkiH5 dmsans-bold-mine-shaft-28px">Educating...</div>
            <p className="p-bIkiH5 dmsans-medium-raven-16px">
              With learning that improves job performance, increases business acumen, and broadens industry expertise for career advancement.
            </p>
          </div>
        </div>
      </div>
      <div className="content-careers-desktop-C61RwL">
        <div className="imgframe-xUubLU">
          <div className="group-1-qQskix">
            <img className="line7-SKRcoU" src={ln7252x} />
            <img className="line8-SKRcoU" src={ln8252x} />
            <img className="line9-SKRcoU" src={ln932x} />
            <img className="line10-SKRcoU" src={ln10252x} />
            <img className="line11-SKRcoU" src={ln11252x} />
            <img className="line12-SKRcoU" src={ln12172x} />
            <img className="line13-SKRcoU" src={ln13172x} />
            <img className="path71-SKRcoU" src={pth71252x} />
            <img className="line15-SKRcoU" src={ln15252x} />
          </div>
          <img className="abstract-shapes-9-3-qQskix" src={abstrctShps9322x} />
          <img className="path70-qQskix" src={pth7052x} />
          <div className="group-82-qQskix">
            <div className="notebook-0gwOuy">
              <img className="object-aJB3k2" src={objct21x} />
              <div className="device-aJB3k2">
                <img className="change-color-3kNrtw" src={chngeClr1x} />
                <img className="shadow-3kNrtw" src={shdw1x} />
                <img className="screen-3kNrtw" src={scrn21x} />
              </div>
              <img className="mockup-aJB3k2" src={mckp22x} />
              <img className="border-aJB3k2" src={brdr1x} />
            </div>
            <div className="phone-0gwOuy">
              <img className="object-wjLxQR" src={objct12x} />
              <div className="device-wjLxQR">
                <img className="change-color-XFUxvJ" src={chngClr12x} />
                <img className="shadow-XFUxvJ" src={shdw12x} />
                <img className="screen-XFUxvJ" src={scrn32x} />
              </div>
              <img className="mockup-wjLxQR" src={mckp32x} />
              <img className="border-wjLxQR" src={brdr12x} />
            </div>
          </div>
        </div>
        <div className="contentlist-xUubLU">
          <div className="contentlist-tFi7aH">
            <div id="career-opportunities-mid" className="h1-qszjdH dmsans-bold-big-stone-62px">Career Opportunities</div>
            <p className="p-qszjdH dmsans-normal-abbey-16px">
              Through the MPower platform and innovative services to support diverse and inclusive workforces, M2N
              provides members with career advancement opportunities.
            </p>
          </div>
          <div className="highlightlist-tFi7aH">
            <div className="highlight-desktop-Gx3fYW">
              <div className="prepare-i729981824-xEGWlc dmsans-bold-royal-blue-18px">Prepare</div>
              <p className="deliver-transfo-ires-i729981823-xEGWlc dmsans-normal-gray-14px">
                Deliver transformational DEI training to hiring managers and extended teams to prepare for and support
                their new hires.
              </p>
            </div>
            <div className="highlight-desktop-VOqVkx">
              <div className="prepare-i729991824-xjeE2T dmsans-bold-persimmon-18px">Recruit</div>
              <p className="deliver-transfo-ires-i729991823-xjeE2T dmsans-normal-gray-14px">
                Identify candidates for job opportunities based upon work experience and their activity and engagement
                in the MPower platform.
              </p>
            </div>
            <div className="highlight-desktop-j3mg2J">
              <div className="prepare-i730001824-SgfJ49 dmsans-bold-shamrock-18px">Connect</div>
              <p className="deliver-transfo-ires-i730001823-SgfJ49 dmsans-normal-gray-14px">
                Membership to organizations who promote a comprehensive approach to DEI.
              </p>
            </div>
            <div className="highlight-desktop-8oUlvX">
              <div className="prepare-i730011824-VA8krm dmsans-bold-cerulean-18px">Support</div>
              <p className="deliver-transfo-ires-i730011823-VA8krm dmsans-normal-gray-14px">
                On-going support for members to ensure they are fulfilled, engaged, and performing well in their new
                roles.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-tablet-C61RwL">
        <img className="gradientdropstroke-ExkJd9" src={grdntDrpStrk11x} />
        <div className="texturelines-ExkJd9">
          <img className="line7-rSc7yE" src={ln7262x} />
          <img className="line8-rSc7yE" src={ln8262x} />
          <img className="line9-rSc7yE" src={ln9102x} />
          <img className="line10-rSc7yE" src={ln10262x} />
          <img className="line11-rSc7yE" src={ln11262x} />
          <img className="line12-rSc7yE" src={ln12262x} />
          <img className="line13-rSc7yE" src={ln13262x} />
          <img className="path71-rSc7yE" src={pth71262x} />
          <img className="line15-rSc7yE" src={ln15262x} />
        </div>
        <div className="contentsection-ExkJd9">
          <div className="contentrow-O75zxr">
            <div className="h3-8aCL1P dmsans-medium-white-40px">
              <span className="span2-aQcV4x dmsans-medium-white-40px">
                Explore the best tools to accelerate your professional development</span
              >
            </div>
            <Link to="/mpower-app">
              <div className="button-8aCL1P">
                <div className="download-app-Xb4lEN inter-semi-bold-white-20px">Explore MPower</div>
              </div>
            </Link>
          </div>
        </div>
        <Link to="/mpower-app">
          <div className="circleframe-ExkJd9">
            <img className="circle-OO6Xxp" src={crcl11x} />
            <div className="highlightfree-OO6Xxp"></div>
          </div>
        </Link>
      </div>
      <div className="footer-C61RwL">
        <div className="background-iPe1yZ"></div>
        <div className="frame-iPe1yZ">
          <img className="vector-gq7idq" src={vctr4492x} />
        </div>
        <p className="info-iPe1yZ dmsans-normal-white-14px">
          A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
        </p>
        <div className="rectangle-iPe1yZ"></div>
        <p className="copyright-2018-al-iPe1yZ dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <p className="copyright-2018-al-CMvW9s dmsans-normal-white-14px-2">
          <span className="span0-eEh521 dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-eEh521 dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-eEh521 dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <div className="frame-43-iPe1yZ">
          <div className="instagram-hamoIG"><img className="combined-shape-Kjvr2X" src={cmbndShp52x} /></div>
          <div className="twitter-hamoIG"><img className="path-jPphH2" src={pth2x} /></div>
          <div className="linkedin-1-hamoIG"><img className="vector-YIAmW9" src={vctr3532x} /></div>
        </div>
        <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
        <form action="">
          <div className="inputs-default-iPe1yZ">
            <div className="input-4j1ImY">
              <div className="style-urJPUx border-1px-celeste"></div>
            </div>
            <input
              className="placeholder-4j1ImY dmsans-normal-gunsmoke-16px"
              name="email"
              placeholder="Your email"
              type="email"
              required
              />
          </div>
          {/* <div className="default-text-iPe1yZ">
            <div className="button-TQGk14">
              <div className="style-BFaroP"></div>
            </div>
            <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
          </div> */}
          <input className="default-text-vxY8x4 sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
        </form>
        <div className="column3-iPe1yZ">
          <div className="platform-X4QSxG dmsans-bold-white-16px">Platform</div>
          <Link to="/mpower-app">
              <div className="ios-X4QSxG dmsans-normal-white-16px">iOS</div>
          </Link>
          <Link to="/mpower-app">
              <div className="android-X4QSxG dmsans-normal-white-16px">Android</div>
          </Link>
          <Link to="/mpower-app">
              <div className="browser-X4QSxG dmsans-normal-white-16px">Browser</div>
          </Link>
        </div>
        <div className="column2-iPe1yZ">
          <div className="about-S164Qk dmsans-bold-white-16px">
            <span className="span0-HtUoHN dmsans-bold-white-16px">About</span
            ><span className="span1-HtUoHN dmsans-normal-white-16px-2"><br /></span>
          </div>
          <Link to="/mpower">
              <div className="mpower-S164Qk dmsans-normal-white-16px">MPower</div>
          </Link>
          <Link to="/partners">
              <div className="partnerships-S164Qk dmsans-normal-white-16px">Partnerships</div>
          </Link>
          <Link to="/company">
              <div className="company-S164Qk dmsans-normal-white-16px">Company</div>
          </Link>
        </div>
      </div>
    </div>
    <div className="mpower-tablet-720px screen">
      <div className="contentsection-C61RwL">
        <div id="member-development-tablet" className="h1-OvIgOz dmsans-bold-big-stone-40px">Member Development</div>
        <p className="p-OvIgOz dmsans-normal-abbey-16px">
          Members only coursework, discussion groups and guest lectures by globally recognized thought leaders that
          empower, educate, and engage minority professionals.
        </p>
      </div>
      <div className="featuregroup-C61RwL">
        <div className="texturelinesred-LatYOS">
          <div className="texturelinesred-zDfgnF">
            <img className="line7-0JVbmJ" src={ln7272x} />
            <img className="line8-0JVbmJ" src={ln8272x} />
            <img className="line9-0JVbmJ" src={ln9272x} />
            <img className="line10-0JVbmJ" src={ln10272x} />
            <img className="line11-0JVbmJ" src={ln11272x} />
            <img className="line12-0JVbmJ" src={ln12272x} />
            <img className="line13-0JVbmJ" src={ln13272x} />
            <img className="path71-0JVbmJ" src={pth71272x} />
            <img className="line15-0JVbmJ" src={ln15272x} />
          </div>
        </div>
        <div className="card1-LatYOS">
          <div className="icon1-sdW0RJ">
            <div className="circle-OuA16q"></div>
            <img className="iconbriefcase-OuA16q" src={icnBrfcs12x} />
          </div>
          <div className="h2-sdW0RJ dmsans-bold-mine-shaft-28px">Empowering...</div>
          <p className="p-sdW0RJ dmsans-medium-raven-16px">
            Membership to use their lived experience in ways that provide great value to their employing organizations.
          </p>
        </div>
        <div className="texturelinesblue-LatYOS">
          <div className="texturelinesblue-JCjxki">
            <img className="line7-m8JeOS" src={ln7282x} />
            <img className="line8-m8JeOS" src={ln8282x} />
            <img className="line9-m8JeOS" src={ln9282x} />
            <img className="line10-m8JeOS" src={ln10282x} />
            <img className="line11-m8JeOS" src={ln11282x} />
            <img className="line12-m8JeOS" src={ln12282x} />
            <img className="line13-m8JeOS" src={ln13282x} />
            <img className="path71-m8JeOS" src={pth7282x} />
            <img className="line15-m8JeOS" src={ln15282x} />
          </div>
        </div>
        <div className="card2-LatYOS">
          <div className="iconpeople-fBDd5j">
            <div className="circle-79rsCO"></div>
            <div className="iconpeople-79rsCO"><img className="vector-kuFVAN" src={vctr4912x} /></div>
          </div>
          <div className="h2-fBDd5j dmsans-bold-mine-shaft-28px">Engaging...</div>
          <p className="p-fBDd5j dmsans-medium-raven-16px">
          With inspirational stories of individual, organizational and community success in the areas of diversity, equity, and inclusion.
          </p>
        </div>
        <div className="texturelinesgreen-LatYOS">
          <img className="texturelinesgreen-8dnuxR" src={txtrLnsGrn11x} />
        </div>
        <div className="card3-LatYOS">
          <div className="iconbook-tsqy5t">
            <div className="circle-HR8j1J"></div>
            <div className="iconbook-HR8j1J"><img className="vector-vPMyAU" src={vctr4922x} /></div>
          </div>
          <div className="h2-tsqy5t dmsans-bold-mine-shaft-28px">Educating</div>
          <p className="p-tsqy5t dmsans-medium-raven-16px">
            With learning that improves job performance, increases business acumen, and broadens industry expertise for career advancement.
          </p>
        </div>
      </div>
      <div className="hero-tablet-C61RwL">
        <div className="shapes-TfYITc">
          <img className="path1-lwI0Kf" src={pth132x} />
          <img className="path3-lwI0Kf" src={pth372x} />
          <div className="group-1-lwI0Kf">
            <img className="line7-HSzGSr" src={ln7292x} />
            <img className="line8-HSzGSr" src={ln8292x} />
            <img className="line9-HSzGSr" src={ln9292x} />
            <img className="line10-HSzGSr" src={ln10292x} />
            <img className="line11-HSzGSr" src={ln11292x} />
            <img className="line12-HSzGSr" src={ln12292x} />
            <img className="line13-HSzGSr" src={ln13292x} />
            <img className="path71-HSzGSr" src={pth71292x} />
            <img className="line15-HSzGSr" src={ln15292x} />
          </div>
        </div>
        <div className="frame-45-TfYITc">
          <div className="x2-6sJyZV">
            <img className="phone-CGALLR" src={phn42x} />
            <img className="screen-CGALLR" src={scrn82x} />
            <div className="glass-CGALLR">
              <img className="glass-JTxDvT" src={glss42x} />
              <img className="color-dodge-JTxDvT" src={clrDdge42x} />
            </div>
            <img className="over-shadow-CGALLR" src={ovrShdw22x} />
          </div>
          <div className="x1-6sJyZV">
            <img className="phone-3182nM" src={phn52x} />
            <img className="screen-3182nM" src={scrn92x} />
            <div className="glass-3182nM">
              <img className="glass-ODN9Rr" src={glss52x} />
              <img className="color-dodge-ODN9Rr" src={clrDdge52x} />
            </div>
          </div>
        </div>
        <img className="circleshape-TfYITc" src={crclShp22x} />
        <div className="contentlist-TfYITc">
          <div className="contentlist-dJAuae">
            <div className="logo-PrvBao">
              <div className="group-BexW5c"><img className="vector-35n3OB" src={vctr4932x} /></div>
              <img className="subtract-BexW5c" src={sbtrct92x} />
              <div className="group-79-BexW5c">
                <img className="ellipse-7-X1K4b7" src={elpse7272x} />
                <img className="ellipse-8-X1K4b7" src={elpse8272x} />
              </div>
              <div className="group-80-BexW5c">
                <img className="ellipse-7-Cf7uBn" src={elpse7282x} />
                <img className="ellipse-8-Cf7uBn" src={elpse8282x} />
              </div>
              <div className="group-81-BexW5c">
                <img className="ellipse-7-RurG7t" src={elpse7292x} />
                <img className="ellipse-8-RurG7t" src={elpse8292x} />
              </div>
            </div>
            <p className="p-PrvBao dmsans-normal-white-16px-2">
              Combining a dynamic newsfeed, on-demand video and 1:1/1:x video conferencing, MPower members have
              unlimited access to the knowledge, resources, tools, and mentorship to accelerate and advance their
              careers.
            </p>
          </div>
          <Link to="/mpower-app">
            <div className="download-buttons-dJAuae">
              <div className="app-store-t52Sia">
                <img className="path-3-YgZ69o" src={pth382x} />
                <img className="path-4-YgZ69o" src={pth452x} />
                <img className="path-5-YgZ69o" src={pth52x} />
                <div className="group-2-YgZ69o"><img className="path-6-3ciauk" src={pth652x} /></div>
                <div className="group-3-YgZ69o"><img className="path-7-XQj0he" src={pth752x} /></div>
              </div>
              <img className="image-1-t52Sia" src={img122x} />
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="navbar-mobile-C61RwL">
        <div className="logo-gTO9GM"><img className="vector-xvusrZ" src="./import/img/vector-494@2x.png" /></div>
        <div className="menu24px-gTO9GM">
          <img className="iconnavigationmenu24px-xsYvp9" src="./import/img/icon-navigation-menu-24px-1@2x.png" />
        </div>
      </div> */}
      <NavMobile theme="dark" />
      <div className="cta-mobile-C61RwL">
        <img className="gradientdropstroke-xVseMs" src={grdntDrpStrk21x} />
        <div className="texturelines-xVseMs">
          <img className="line7-x3k0La" src={ln7102x} />
          <img className="line8-x3k0La" src={ln8302x} />
          <img className="line9-x3k0La" src={ln9102x} />
          <img className="line10-x3k0La" src={ln10302x} />
          <img className="line11-x3k0La" src={ln11302x} />
          <img className="line12-x3k0La" src={ln12102x} />
          <img className="line13-x3k0La" src={ln13102x} />
          <img className="path71-x3k0La" src={pth71302x} />
          <img className="line15-x3k0La" src={ln15302x} />
        </div>
        <div className="contentrow-xVseMs">
          <div className="h3-x5Sopb dmsans-medium-white-32px">
            <span className="span2-RT9OP6 dmsans-medium-white-32px">
              Explore the best tools to accelerate your professional development</span
            >
          </div>
          <Link to="/mpower-app">
            <div className="button-x5Sopb">
              <div className="download-app-MH0yCk inter-semi-bold-white-20px">Explore MPower</div>
            </div>
          </Link>
        </div>
        <Link to="/mpower-app">
          <div className="circleframe-xVseMs">
            <img className="circle-pwquuQ" src={crcl21x} />
            <div className="highlightfree-pwquuQ"></div>
          </div>
        </Link>
      </div>
      <div className="contentlist-C61RwL">
        <div className="contentlist-7ACtXI">
          <div id="career-opportunities-tablet" className="h1-hUzHx1 dmsans-bold-big-stone-40px">Career Opportunities</div>
          <p className="p-hUzHx1 dmsans-normal-abbey-16px">
            Through the MPower platform and innovative services to support diverse and inclusive workforces, M2N
            provides members with career advancement opportunities.
          </p>
        </div>
        <div className="highlightlist-7ACtXI">
          <div className="highlight-desktop-p10TJv">
            <div className="prepare-i740101824-0h9xzg dmsans-bold-royal-blue-18px">Prepare</div>
            <p className="deliver-transfo-ires-i740101823-0h9xzg dmsans-normal-gray-14px">
              Deliver transformational DEI training to hiring managers and extended teams to prepare for and support
              their new hires.
            </p>
          </div>
          <div className="highlight-desktop-6roFiR">
            <div className="prepare-i740111824-rL4xfN dmsans-bold-persimmon-18px">Recruit</div>
            <p className="deliver-transfo-ires-i740111823-rL4xfN dmsans-normal-gray-14px">
              Identify candidates for job opportunities based upon work experience and their activity and engagement in
              the MPower platform.
            </p>
          </div>
          <div className="highlight-desktop-BxywGG">
            <div className="prepare-i740121824-joMBxZ dmsans-bold-shamrock-18px">Connect</div>
            <p className="deliver-transfo-ires-i740121823-joMBxZ dmsans-normal-gray-14px">
              Membership to organizations who promote a comprehensive approach to DEI.
            </p>
          </div>
          <div className="highlight-desktop-7EvXMj">
            <div className="prepare-i740131824-29qyfL dmsans-bold-cerulean-18px">Support</div>
            <p className="deliver-transfo-ires-i740131823-29qyfL dmsans-normal-gray-14px">
              On-going support for members to ensure they are fulfilled, engaged, and performing well in their new
              roles.
            </p>
          </div>
        </div>
      </div>
      <div className="imgframe-C61RwL">
        <div className="group-1-6IZ0TO">
          <img className="line7-xxxpP1" src={ln7312x} />
          <img className="line8-xxxpP1" src={ln8312x} />
          <img className="line9-xxxpP1" src={ln9312x} />
          <img className="line10-xxxpP1" src={ln10312x} />
          <img className="line11-xxxpP1" src={ln11312x} />
          <img className="line12-xxxpP1" src={ln12312x} />
          <img className="line13-xxxpP1" src={ln13312x} />
          <img className="path71-xxxpP1" src={pth71312x} />
          <img className="line15-xxxpP1" src={ln15312x} />
        </div>
        <img className="abstract-shapes-9-3-6IZ0TO" src={abstrctShps9332x} />
        <img className="path70-6IZ0TO" src={pth7062x} />
        <div className="group-82-6IZ0TO">
          <div className="notebook-LpfLZ8">
          <img className="object-p9l8ph" src={objct41x} />
            <div className="device-p9l8ph">
              <img className="change-color-pwn618" src={chngClr42x} />
              <img className="shadow-pwn618" src={shdw42x} />
              <img className="screen-pwn618" src={scrn102x} />
            </div>
            <img className="mockup-p9l8ph" src={mckp42x} />
            <img className="border-p9l8ph" src={brdr42x} />
          </div>
          <div className="phone-LpfLZ8">
            <img className="object-fzJGQF" src={objct52x} />
            <div className="device-fzJGQF">
              <img className="change-color-Bycb4P" src={chngClr52x} />
              <img className="shadow-Bycb4P" src={shdw52x} />
              <img className="screen-Bycb4P" src={scrn112x} />
            </div>
            <img className="mockup-fzJGQF" src={mckp52x} />
            <img className="border-fzJGQF" src={brdr52x} />
          </div>
        </div>
      </div>
      <div className="footer-C61RwL">
        <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
        <form action="">
          <div className="inputs-default-iPe1yZ">
            <div className="input-4j1ImY">
              <div className="style-urJPUx border-1px-celeste"></div>
            </div>
            <input
              className="placeholder-4j1ImY dmsans-normal-gunsmoke-16px"
              name="email"
              placeholder="Your email"
              type="email"
              required
              />
          </div>
          {/* <div className="default-text-iPe1yZ">
            <div className="button-TQGk14">
              <div className="style-BFaroP"></div>
            </div>
            <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
          </div> */}
          <input className="default-text-vxY8x4 sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
        </form>
        <div className="frame-iPe1yZ">
          <img className="vector-gq7idq" src={vctr4492x} />
        </div>
        <p className="info-iPe1yZ dmsans-normal-white-14px">
          A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
        </p>
        <div className="rectangle-iPe1yZ"></div>
        <p className="copyright-2018-al-iPe1yZ dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <p className="copyright-2018-al-CMvW9s dmsans-normal-white-14px-2">
          <span className="span0-eEh521 dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-eEh521 dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-eEh521 dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <div className="frame-47-iPe1yZ">
          <div className="instagram-ER5pEj"><img className="combined-shape-a2OMEj" src={cmbndShp52x} /></div>
          <div className="twitter-ER5pEj"><img className="path-g8wxqH" src={pth2x} /></div>
          <div className="linkedin-1-ER5pEj"><img className="vector-H2IUZC" src={vctr3532x} /></div>
        </div>
        <div className="column2-iPe1yZ">
          <div className="about-S164Qk dmsans-bold-white-16px">
            <span className="span0-HtUoHN dmsans-bold-white-16px">About</span
            ><span className="span1-HtUoHN dmsans-normal-white-16px-2"><br /></span>
          </div>
          <Link to="/mpower">
              <div className="mpower-S164Qk dmsans-normal-white-16px">MPower</div>
          </Link>
          <Link to="/partners">
              <div className="partnerships-S164Qk dmsans-normal-white-16px">Partnerships</div>
          </Link>
          <Link to="/company">
              <div className="company-S164Qk dmsans-normal-white-16px">Company</div>
          </Link>
        </div>
        <div className="column3-iPe1yZ">
          <div className="platform-X4QSxG dmsans-bold-white-16px">Platform</div>
          <Link to="/mpower-app">
              <div className="ios-X4QSxG dmsans-normal-white-16px">iOS</div>
          </Link>
          <Link to="/mpower-app">
              <div className="android-X4QSxG dmsans-normal-white-16px">Android</div>
          </Link>
          <Link to="/mpower-app">
              <div className="browser-X4QSxG dmsans-normal-white-16px">Browser</div>
          </Link>
        </div>
      </div>
    </div>
    <div className="mpower-mobile-320px screen">
      <div className="content-features-mobile-C61RwL">
        <div className="contentsection-ZOxzMY">
          <div id="member-development-mobile" className="h1-Wxxu0R dmsans-bold-big-stone-40px">Member Development</div>
          <p className="p-Wxxu0R dmsans-normal-abbey-16px">
            Members only coursework, discussion groups and guest lectures by globally recognized thought leaders that
            empower, educate, and engage minority professionals.
          </p>
        </div>
        <div className="featuregroup-ZOxzMY">
          <div className="texturelinesred-w8NxyH">
            <div className="texturelinesred-L6edsW">
              <img className="line7-znIAZV" src={ln7362x} />
              <img className="line8-znIAZV" src={ln8362x} />
              <img className="line9-znIAZV" src={ln9272x} />
              <img className="line10-znIAZV" src={ln10362x} />
              <img className="line11-znIAZV" src={ln11362x} />
              <img className="line12-znIAZV" src={ln12362x} />
              <img className="line13-znIAZV" src={ln13362x} />
              <img className="path71-znIAZV" src={pth71272x} />
              <img className="line15-znIAZV" src={ln15362x} />
            </div>
          </div>
          <div className="card1-w8NxyH">
            <div className="icon1-urDbbu">
              <div className="circle-26ac6Z"></div>
              <img className="iconbriefcase-26ac6Z" src={icnBrfcs12x} />
            </div>
            <div className="h2-urDbbu dmsans-bold-mine-shaft-28px">Empowering...</div>
            <p className="p-urDbbu dmsans-medium-raven-16px">
              Membership to use their lived experience in ways that provide great value to their employing organizations.
            </p>
          </div>
          <div className="texturelinesblue-w8NxyH">
            <div className="texturelinesblue-wWiHmR">
              <img className="line7-6FHocR" src={ln7372x} />
              <img className="line8-6FHocR" src={ln8372x} />
              <img className="line9-6FHocR" src={ln9372x} />
              <img className="line10-6FHocR" src={ln10372x} />
              <img className="line11-6FHocR" src={ln11372x} />
              <img className="line12-6FHocR" src={ln12372x} />
              <img className="line13-6FHocR" src={ln13372x} />
              <img className="path71-6FHocR" src={pth71372x} />
              <img className="line15-6FHocR" src={ln15372x} />
            </div>
          </div>
          <div className="card2-w8NxyH">
            <div className="iconpeople-Sq5wIx">
              <div className="circle-DpAzmb"></div>
              <div className="iconpeople-DpAzmb"><img className="vector-los0zz" src={vctr4912x} /></div>
            </div>
            <div className="h2-Sq5wIx dmsans-bold-mine-shaft-28px">Engaging...</div>
            <p className="p-Sq5wIx dmsans-medium-raven-16px">
            With inspirational stories of individual, organizational and community success in the areas of diversity, equity, and inclusion.
            </p>
          </div>
          <div className="texturelinesgreen-w8NxyH">
            <img className="texturelinesgreen-p1QlUx" src={txtrLnsGrn11x} />
          </div>
          <div className="card3-w8NxyH">
            <div className="iconbook-P3x1YM">
              <div className="circle-ojGKEi"></div>
              <div className="iconbook-ojGKEi"><img className="vector-NETljL" src={vctr4922x} /></div>
            </div>
            <div className="h2-P3x1YM dmsans-bold-mine-shaft-28px">Educating</div>
            <p className="p-P3x1YM dmsans-medium-raven-16px">
              With learning that improves job performance, increases business acumen, and broadens industry expertise for career advancement.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-tablet-C61RwL">
        <div className="shapes-TfYITc">
          <img className="path1-lwI0Kf" src={pth132x} />
          <img className="path3-lwI0Kf" src={pth372x} />
          <div className="group-1-lwI0Kf">
            <img className="line7-HSzGSr" src={ln7292x} />
            <img className="line8-HSzGSr" src={ln8292x} />
            <img className="line9-HSzGSr" src={ln9292x} />
            <img className="line10-HSzGSr" src={ln10292x} />
            <img className="line11-HSzGSr" src={ln11292x} />
            <img className="line12-HSzGSr" src={ln12292x} />
            <img className="line13-HSzGSr" src={ln13292x} />
            <img className="path71-HSzGSr" src={pth71292x} />
            <img className="line15-HSzGSr" src={ln15292x} />
          </div>
        </div>
        <div className="frame-45-TfYITc">
          <div className="x2-6sJyZV">
            <img className="phone-CGALLR" src={phn82x} />
            <img className="screen-CGALLR" src={scrn182x} />
            <div className="glass-CGALLR">
              <img className="glass-JTxDvT" src={glss82x} />
              <img className="color-dodge-JTxDvT" src={clrDdg82x} />
            </div>
            <img className="over-shadow-CGALLR" src={ovrshdw42x} />
          </div>
          <div className="x1-6sJyZV">
            <img className="phone-3182nM" src={phn92x} />
            <img className="screen-3182nM" src={scrn192x} />
            <div className="glass-3182nM">
              <img className="glass-ODN9Rr" src={glss92x} />
              <img className="color-dodge-ODN9Rr" src={clrDdg92x} />
            </div>
          </div>
        </div>
        <img className="circleshape-TfYITc" src={crclShp32x} />
        <div className="contentlist-TfYITc">
          <div className="contentlist-dJAuae">
            <div className="logo-PrvBao">
              <div className="group-BexW5c"><img className="vector-35n3OB" src={vctr4932x} /></div>
              <img className="subtract-BexW5c" src={sbtrct92x} />
              <div className="group-79-BexW5c">
                <img className="ellipse-7-X1K4b7" src={elpse7272x} />
                <img className="ellipse-8-X1K4b7" src={elpse8272x} />
              </div>
              <div className="group-80-BexW5c">
                <img className="ellipse-7-Cf7uBn" src={elpse7282x} />
                <img className="ellipse-8-Cf7uBn" src={elpse8282x} />
              </div>
              <div className="group-81-BexW5c">
                <img className="ellipse-7-RurG7t" src={elpse7292x} />
                <img className="ellipse-8-RurG7t" src={elpse8292x} />
              </div>
            </div>
            <p className="p-PrvBao dmsans-normal-white-16px-2">
              Combining a dynamic newsfeed, on-demand video and 1:1/1:x video conferencing, MPower members have
              unlimited access to the knowledge, resources, tools, and mentorship to accelerate and advance their
              careers.
            </p>
          </div>
          <Link to="/mpower-app">
            <div className="download-buttons-dJAuae">
              <div className="app-store-t52Sia">
                <img className="path-3-YgZ69o" src={pth382x} />
                <img className="path-4-YgZ69o" src={pth452x} />
                <img className="path-5-YgZ69o" src={pth52x} />
                <div className="group-2-YgZ69o"><img className="path-6-3ciauk" src={pth652x} /></div>
                <div className="group-3-YgZ69o"><img className="path-7-XQj0he" src={pth752x} /></div>
              </div>
              <img className="image-1-t52Sia" src={img122x} />
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="navbar-mobile-C61RwL">
        <div className="logo-gTO9GM"><img className="vector-xvusrZ" src="./import/img/vector-494@2x.png" /></div>
        <div className="menu24px-gTO9GM">
          <img className="iconnavigationmenu24px-xsYvp9" src="./import/img/icon-navigation-menu-24px-1@2x.png" />
        </div>
      </div> */}
      <NavMobile theme="dark" />
      <div className="cta-mobile-C61RwL">
        <img className="gradientdropstroke-xVseMs" src={grdntDrpStrk32x} />
        <div className="texturelines-xVseMs">
          <img className="line7-x3k0La" src={ln7102x} />
          <img className="line8-x3k0La" src={ln8302x} />
          <img className="line9-x3k0La" src={ln9102x} />
          <img className="line10-x3k0La" src={ln10302x} />
          <img className="line11-x3k0La" src={ln11302x} />
          <img className="line12-x3k0La" src={ln12102x} />
          <img className="line13-x3k0La" src={ln13102x} />
          <img className="path71-x3k0La" src={pth71302x} />
          <img className="line15-x3k0La" src={ln15302x} />
        </div>
        <div className="contentrow-xVseMs">
          <div className="h3-x5Sopb dmsans-medium-white-32px">
            <span className="span2-RT9OP6 dmsans-medium-white-32px">
              Explore the best tools to accelerate your professional development</span
            >
          </div>
          <Link to="/mpower-app">
            <div className="button-x5Sopb">
              <div className="download-app-MH0yCk inter-semi-bold-white-20px">Explore MPower</div>
            </div>
          </Link>
        </div>
        <Link to="/mpower-app">
          <div className="circleframe-xVseMs">
            <img className="circle-pwquuQ" src={crcl31x} />
            <div className="highlightfree-pwquuQ"></div>
          </div>
        </Link>
      </div>
      <div className="frame-46-C61RwL">
        <div className="contentlist-xxuxFA">
          <div className="contentlist-rVTxm0">
            <div id="career-opportunities-mobile" className="h1-IIMWNk dmsans-bold-big-stone-40px">Career Opportunities</div>
            <p className="p-IIMWNk dmsans-normal-abbey-16px">
              Through the MPower platform and innovative services to support diverse and inclusive workforces, M2N
              provides members with career advancement opportunities.
            </p>
          </div>
          <div className="highlightlist-rVTxm0">
            <div className="highlight-desktop-xPJDJq">
              <div className="prepare-i311941824-7G8R8X dmsans-bold-royal-blue-18px">Prepare</div>
              <p className="deliver-transfo-ires-i311941823-7G8R8X dmsans-normal-gray-14px">
                Deliver transformational DEI training to hiring managers and extended teams to prepare for and support
                their new hires.
              </p>
            </div>
            <div className="highlight-desktop-f71EOk">
              <div className="prepare-i311951824-kSGPyL dmsans-bold-persimmon-18px">Recruit</div>
              <p className="deliver-transfo-ires-i311951823-kSGPyL dmsans-normal-gray-14px">
                Identify candidates for job opportunities based upon work experience and their activity and engagement
                in the MPower platform.
              </p>
            </div>
            <div className="highlight-desktop-Tzxk9F">
              <div className="prepare-i311961824-JxfEN3 dmsans-bold-shamrock-18px">Connect</div>
              <p className="deliver-transfo-ires-i311961823-JxfEN3 dmsans-normal-gray-14px">
                Membership to organizations who promote a comprehensive approach to DEI. 
              </p>
            </div>
            <div className="highlight-desktop-wCbI1w">
              <div className="prepare-i311971824-jQ45xd dmsans-bold-cerulean-18px">Support</div>
              <p className="deliver-transfo-ires-i311971823-jQ45xd dmsans-normal-gray-14px">
                On-going support for members to ensure they are fulfilled, engaged, and performing well in their new
                roles.
              </p>
            </div>
          </div>
        </div>
        <div className="imgframe-xxuxFA">
          <div className="group-1-JGs6yV">
            <img className="line7-gJ51uW" src={ln7402x} />
            <img className="line8-gJ51uW" src={ln8312x} />
            <img className="line9-gJ51uW" src={ln9312x} />
            <img className="line10-gJ51uW" src={ln10402x} />
            <img className="line11-gJ51uW" src={ln11312x} />
            <img className="line12-gJ51uW" src={ln12312x} />
            <img className="line13-gJ51uW" src={ln13312x} />
            <img className="path71-gJ51uW" src={pth71312x} />
            <img className="line15-gJ51uW" src={ln15312x} />
          </div>
          <img className="abstract-shapes-9-3-JGs6yV" src={abstrctShps9332x} />
          <img className="path70-JGs6yV" src={pth7062x} />
          <div className="group-82-JGs6yV">
            <div className="notebook-WKvauI">
              <img className="object-xUxRpO" src={objct101x} />
              <div className="device-xUxRpO">
                <img className="change-color-FbVJaV" src={chngClr42x} />
                <img className="shadow-FbVJaV" src={shdw42x} />
                <img className="screen-FbVJaV" src={scrn202x} />
              </div>
              <img className="mockup-xUxRpO" src={mckp102x} />
              <img className="border-xUxRpO" src={brdr42x} />
            </div>
            <div className="phone-WKvauI">
              <img className="object-azLWLM" src={objct52x} />
              <div className="device-azLWLM">
                <img className="change-color-ZU2ih5" src={chngClr52x} />
                <img className="shadow-ZU2ih5" src={shdw52x} />
                <img className="screen-ZU2ih5" src={scrn112x} />
              </div>
              <img className="mockup-azLWLM" src={mckp112x} />
              <img className="border-azLWLM" src={brdr52x} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-C61RwL">
        <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
        <form action="">
          <div className="inputs-default-iPe1yZ">
            <div className="input-4j1ImY">
              <div className="style-urJPUx border-1px-celeste"></div>
            </div>
            <input
              className="placeholder-4j1ImY dmsans-normal-gunsmoke-16px"
              name="email"
              placeholder="Your email"
              type="email"
              required
              />
          </div>
          {/* <div className="default-text-iPe1yZ">
            <div className="button-TQGk14">
              <div className="style-BFaroP"></div>
            </div>
            <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
          </div> */}
          <input className="default-text-vxY8x4 sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
        </form>
        <div className="frame-iPe1yZ">
          <img className="vector-gq7idq" src={vctr4492x} />
        </div>
        <p className="info-iPe1yZ dmsans-normal-white-14px">
          A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
        </p>
        <div className="rectangle-iPe1yZ"></div>
        <p className="copyright-2018-al-iPe1yZ dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <p className="copyright-2018-al-CMvW9s dmsans-normal-white-14px-2">
          <span className="span0-eEh521 dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-eEh521 dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-eEh521 dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <div className="frame-47-iPe1yZ">
          <div className="instagram-ER5pEj"><img className="combined-shape-a2OMEj" src={cmbndShp52x} /></div>
          <div className="twitter-ER5pEj"><img className="path-g8wxqH" src={pth2x} /></div>
          <div className="linkedin-1-ER5pEj"><img className="vector-H2IUZC" src={vctr3532x} /></div>
        </div>
        <div className="column2-iPe1yZ">
          <div className="about-S164Qk dmsans-bold-white-16px">
            <span className="span0-HtUoHN dmsans-bold-white-16px">About</span
            ><span className="span1-HtUoHN dmsans-normal-white-16px-2"><br /></span>
          </div>
          <Link to="/mpower">
              <div className="mpower-S164Qk dmsans-normal-white-16px">MPower</div>
          </Link>
          <Link to="/partners">
              <div className="partnerships-S164Qk dmsans-normal-white-16px">Partnerships</div>
          </Link>
          <Link to="/company">
              <div className="company-S164Qk dmsans-normal-white-16px">Company</div>
          </Link>
        </div>
        <div className="column3-iPe1yZ">
          <div className="platform-X4QSxG dmsans-bold-white-16px">Platform</div>
          <Link to="/mpower-app">
              <div className="ios-X4QSxG dmsans-normal-white-16px">iOS</div>
          </Link>
          <Link to="/mpower-app">
              <div className="android-X4QSxG dmsans-normal-white-16px">Android</div>
          </Link>
          <Link to="/mpower-app">
              <div className="browser-X4QSxG dmsans-normal-white-16px">Browser</div>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage

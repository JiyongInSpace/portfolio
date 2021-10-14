import minideco from './minideco.png';
import yongcha from './yongcha.png';
import todomate from './todomate.png';
import coinnet from './coinnet.png';
import atomy from './atomy.png';
import portfolio from './portfolio.png';
import cardMaker from './card-maker.png';

import shin from './shin.png';
import toru from './to-ru.png';
import nene from './nene.png';
import bo from './bo-.png';
import masao from './masao.png';

const Img = [
    {
        "card" : coinnet,
        "modal" : [ shin, toru, nene ]
    },
    {
        "card" : portfolio,
        "modal" : [ masao, bo ]
    },
    {
        "card" : atomy,
        "modal" : [ shin, toru, nene ]
    },
    {
        "card" : yongcha,
        "modal" : [ masao, bo, nene, shin ]
    },
    {
        "card" : todomate,
        "modal" : [ shin, toru, nene ]
    },
    {
        "card" : minideco,
        "modal" : [ shin, masao, bo ]
    },
    {
        "card" : cardMaker,
        "modal" : [ nene, shin, masao ]
    }
];

export default Img;
import React from 'react'
import { FaChalkboard, FaHeadphonesAlt } from 'react-icons/fa'
import {
  
  AiFillGift,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from 'react-icons/ai'

import { BsPhoneFill } from 'react-icons/bs'
import { MdTablet } from 'react-icons/md'



export const data = [
  {
    title: 'promotion',
    path: '/',
    icon: <AiFillGift />,
    iconClosed: <AiOutlineArrowDown />,
    iconOpened: <AiOutlineArrowUp />,
    subNav: [
      {
        title: 'ramadan',
        path: '/promotions/',
      },
    ],
  },

  {
    title: 'téléphones',
    path: '/',
    icon: <BsPhoneFill />,
    iconClosed: <AiOutlineArrowDown />,
    iconOpened: <AiOutlineArrowUp />,
    subNav: [
      {
        title: 'tecno',
        path: '/tecno/',
      },
      {
        title: 'samsung',
        path: '/samsung/',
      },
      {
        title: 'huawei',
        path: '/huawei/',
      },
      {
        title: 'iphone',
        path: '/iphone/',
      },
      {
        title: 'itel',
        path: '/itel/',
      },

      {
        title: 'nokia',
        path: '/nokia/',
      },
    ],
  },

  {
    title: 'tablettes',
    path: '/',
    icon: <MdTablet />,
    iconClosed: <AiOutlineArrowDown />,
    iconOpened: <AiOutlineArrowUp />,
    subNav: [
      {
        title: 'tablettes enfants',
        path: '/tablet/',
      },
    ],
  },
  {
    title: 'accessoires',
    path: '/',
    icon: <FaHeadphonesAlt />,
    iconClosed: <AiOutlineArrowDown />,
    iconOpened: <AiOutlineArrowUp />,
    subNav: [
      {
        title: 'chargeurs',
        path: '/charge/',
      },
      {
        title: 'ecouteurs',
        path: '/ecouteur/',
      },
    ],
  },
]

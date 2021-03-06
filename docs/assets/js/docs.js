/**
 *                                   /'\
 *                                  /   \
 *                                 /     \
 *               _                /   ..' \_                      /\/'\
 *              / \              / './       \                   /     \
 *            _/   \            /             \        _        / oO    \
 *  /'\      /  '._'\          /               \      / \      /      /''\
 * /   \    /        \        /      /          \    /   \    / \_ ..'    \
 *      \  /          \__    /      /            \  /     \__/             \  
 *       \/              \  /      /              \/__     \                \  
 *        \               \/    __/                   \     \                \     
 *         \              /                            \     \                     
 *                                ))))                        \__                        
 *   _________ _______     __ooO_(O o)_Ooo____                                  
 *  |          \      \   /     | (_)         \\===========\===========\         
 *  |     __    \      \ /      |     __      |            |           |           
 *  |    |__)    \      V      /|    |__)     |            |           |            
 *  |            |\           / |            <            ┌┴┐         ┌┴┐
 *  |        ___/  |         |  |             \          _ \ \       /  |
 *  |       |      |         |  |      |\      \        | \_| |     |    \_
 *  |       |      |         |  |      | \      \        \___/  __  \      `-_
 *  |_______|      |_________|  |______|  |______|             /   \  ''-.    \
 *   ____   __ __  ____  _     ___      ___  ____             /    /      \    \
 *  |    \ |  |  ||    || |   |   \    /  _||    \            |   |        |   |
 *  | ()  )|  |  | |  | | |\\\\    \  /  |_ | ()  )           \    \      /    /
 *  |     ||  |  | |  | |  ( oo) () ||    _||    /             \    `-..-'    /
 *  | ()  ||  :  | |  | |   (_)     ||   |_ |    \       - --   '-_        _-'
 *  |_____| \__,_||____||____||_____||_____||__|\_|                `------'
 *  Addons scaffolder for maximum coding pleasure            - -- --------- -- -
 *
 *  This project was released under MIT license.
 *
 *  @link      http://websemantics.ca
 *  @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
 *  @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 *
 */                             

!function ($) {
  'use strict'
  var gray = '#a3abac';
  var darkGray = '#798486';

  $(function () {
    $(".language-diagram").sequenceDiagram({color: darkGray, theme: 'simple' /* 'hand' */})
    $(".language-chart").flowChart({'line-color': gray, 
                                    'font-color': darkGray, 
                                    'element-color': gray,
                                    'line-width': 2})
  })
}($)
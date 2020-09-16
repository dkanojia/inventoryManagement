const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const inventory = require('./lib/inventoryprocess.js');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Inventory')
  )
);

const run = async () => {
  const inventoryCostInfo = await inventory.getInvCst()
  if("pur_contr" in inventoryCostInfo){
  
    console.log(inventoryCostInfo.finalPrice+ ":" + ":" + "Gloves" + ":" + inventoryCostInfo.g_pd_qt + ":" + "Mask" + ":" + inventoryCostInfo.m_pd_qt)
  
  }else{
    console.log(inventoryCostInfo)
  }
 }

run();

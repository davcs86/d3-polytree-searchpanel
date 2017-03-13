'use strict';

function SearchPanel(sideTabsProvider){
  this._sideTabsProvider = sideTabsProvider;
  this._init();
}

SearchPanel.$inject = [
  'sideTabsProvider'
];


SearchPanel.prototype._init = function(){
  // this._sideTabsProvider.registerSideTab({
  //
  // }, 0);
};

module.exports = SearchPanel;
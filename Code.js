/**
 * GelStack Pro — Google Apps Script Web App Controller
 * 
 * Serves the single-file index.html application with mobile viewport 
 * settings and iframe permissions.
 */

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('GelStack Pro — Subtractive Lighting & Harmony Matcher')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
}
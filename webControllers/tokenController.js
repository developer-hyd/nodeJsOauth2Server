var authorizationCodeManager = require("../managers/authorizationCodeManager");
exports.init = function (db) {
    authorizationCodeManager.init(db);
};
exports.token = function (req, res) {
    var grantType = req.query.grant_type;

    if (grantType === "authorization_code") {
        var clientIdStr = req.query.client_id;
        var clientSecret = req.query.client_secret;
        var code = req.query.code;
        var redirectUri = req.query.redirect_uri;
        var clientId = getClientId(clientIdStr);        
       
        var tokenReq = {            
            clientId: clientId,
            clientSecret: clientSecret,
            code: code,
            redirectUri: redirectUri
        };
        
    } else if (grantType === "password") {

    } else if (grantType === "client_credentials") {

    } else if (grantType) {
        //res.render('oauthError', {error: "invalid_grant"});
        res.redirect('/oauthError?error=invalid_grant');
    } else {
        //res.render('oauthError', {error: "invalid_grant"});
        res.redirect('/oauthError?error=invalid_grant');
    }

};

var getClientId = function (clientIdStr) {
    var clientId;
    if (clientIdStr) {
        try {
            clientId = parseInt(clientIdStr);
        } catch (err) {
            clientId = clientIdStr;
        }
    } else {
        clientId = clientIdStr;
    }
    return clientId;
};

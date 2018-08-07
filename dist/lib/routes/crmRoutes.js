"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crmController_1 = require("../controllers/crmController");
var Routes = /** @class */ (function () {
    function Routes() {
        this.contactController = new crmController_1.ContactController();
    }
    Routes.prototype.routes = function (app) {
        // Get all contacts
        app.route("/contact").get(this.contactController.getContacts);
        // Create a new contact
        app.route("/contact").post(this.contactController.addNewContact);
        // get a specific contact
        app
            .route("/contact/:contactId")
            .get(this.contactController.getContactWithID);
        // update a specific contact
        app.route("/contact/:contactId").put(this.contactController.updateContact);
        // delete a specific contact
        app
            .route("/contact/:contactId")
            .delete(this.contactController.deleteContact);
        app
            .route("/contact/:contactId")
            // edit specific contact
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
        app.route("/").get(function (req, res) {
            res.status(200).send({
                message: "GET request successfulll!!!!"
            });
        });
        // Contact
        app
            .route("/contact")
            // GET endpoint
            .get(function (req, res) {
            // Get all contacts
            res.status(200).send({
                message: "GET request successfulll!!!!"
            });
        })
            // POST endpoint
            .post(function (req, res) {
            // Create new contact
            res.status(200).send({
                message: "POST request successfulll!!!!"
            });
        });
        // Contact detail
        app
            .route("/contact/:contactId")
            // get specific contact
            .get(function (req, res) {
            // Get a single contact detail
            res.status(200).send({
                message: "GET request successfulll!!!!"
            });
        })
            .put(function (req, res) {
            // Update a contact
            res.status(200).send({
                message: "PUT request successfulll!!!!"
            });
        })
            .delete(function (req, res) {
            // Delete a contact
            res.status(200).send({
                message: "DELETE request successfulll!!!!"
            });
        });
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map
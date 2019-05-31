import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ClientService } from "../../services/client.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Client } from "../../models/Client";
import { SettingsService } from "../../services/settings.service";

@Component({
  selector: "app-edit-clients",
  templateUrl: "./edit-clients.component.html",
  styleUrls: ["./edit-clients.component.css"]
})
export class EditClientsComponent implements OnInit {
  id: string;
  client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: 0
  };

  disableBalanceOnEdit: boolean;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.clientService
      .getClient(this.id)
      .subscribe(client => (this.client = client));
    this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
  }

  onSubmit({ value, valid }: { value: Client; valid: boolean }) {
    if (!valid) {
      this.flashMessage.show("Please Fillout the form correctly", {
        cssClass: "alert-danger",
        timeout: 4000
      });
    } else {
      value.id = this.id;
      this.clientService.updateClient(value);
      this.flashMessage.show("Client Updated", {
        cssClass: "alert-success",
        timeout: 4000
      });
      this.router.navigate(["/client/" + this.id]);
    }
  }
}

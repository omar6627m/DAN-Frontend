import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-posts-dashboard-page',
  templateUrl: './posts-dashboard-page.component.html',
  styleUrls: ['./posts-dashboard-page.component.scss']
})
export class PostsDashboardPageComponent implements OnInit{
  public postType: string = "All";
  public tableColumns: string[] = ["ID", "TYPE", "AUTHOR", "TITLE", "ACTIONS"];
  writingType: "edit" | "add" = "add";
  dataModal: boolean = false;
  deleteModal: boolean = false;
  itemIdForDeleteModal: number|null = null;
  postForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  onPostTypeChange(newValue: string) {
    this.postType = newValue;
    // TODO: Fetch or filter data
  }

  toggleDataModal() {
    this.dataModal = !this.dataModal;
  }
  toggleDeleteModal(id:number|null) {
    this.itemIdForDeleteModal = null;
    this.deleteModal = !this.deleteModal;
    this.itemIdForDeleteModal = id;
  }

  addItemModal() {
    this.writingType = "add";
    this.postForm.reset();
    this.toggleDataModal();
  }

  editItemModal(id: number) {
    this.writingType = "edit";
    // TODO: Using the selected row's id assign default values
    this.postForm = this.fb.group({
      title: ['HERE', [Validators.required, Validators.email]],
      type: ['News', Validators.required]
    });
    console.log(id)
    this.toggleDataModal();
  }

  onSubmit() {
    console.log(this.postForm.value);
  }

  onDelete() {
    console.log("Deleting: " + this.itemIdForDeleteModal);
  }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.email]],
      type: ['', Validators.required]
    });
  }

}

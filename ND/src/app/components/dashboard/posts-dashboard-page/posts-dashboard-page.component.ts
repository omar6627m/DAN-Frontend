import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HelpService} from "../../../services/help.service";
import {Help} from "../../../models/help";

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
  helpPostList: Help[] = [];

  constructor(private fb: FormBuilder,private helpService: HelpService) {
  }

  onPostTypeChange(newValue: string) {
    this.postType = newValue;
    // TODO: Fetch or filter data
  }

  onPostImageFileChange(newValue: any) {
    this.postForm.get("image")?.setValue(newValue.target.files[0]);
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
    if (this.postForm.value.type === "Help") {
      const post:Help = {
        title:this.postForm.value.title,
        body: this.postForm.value.body,
      }
      this.helpService.addPost(post,this.postForm.value.image).subscribe(
          (response)=>{
            console.log(response);
            this.toggleDataModal();
          },
          (error)=>{
            console.log(error);
          }
      );
    }
  }

  onDelete() {
    console.log("Deleting: " + this.itemIdForDeleteModal);
    this.helpService.deleteHelpPost(String(this.itemIdForDeleteModal)).subscribe(
        response=>{
          console.log(response);
          this.fetchHelpPostList();
          this.toggleDeleteModal(null);
        }
    );
  }

  fetchHelpPostList() {
     this.helpService.getHelpPosts().subscribe(
         response=>{
           this.helpPostList = response;
           console.log(this.helpPostList);

         }
     );
  }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.email]],
      type: ['', Validators.required],
      body: ['', Validators.required],
      image: ['']
    });
    this.fetchHelpPostList();
  }

}

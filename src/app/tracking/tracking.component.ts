import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../app.constants';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  form: FormGroup;
  adsLinkId: string;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.listenRouter();
    this.buildForm();
  }

  onSubmit() {
    const value = this.form.value;
    const contact = JSON.stringify(value);
    if (value.Ho_Va_Ten === null) {
      this.toastr.error('Quý khách cần nhập đầy đủ họ và tên');
    } else if (value.So_Dien_Thoai === null) {
      this.toastr.error('Quý khách cần nhập đầy đủ số điện thoại');
    } else if (value.Tinh_Trang_Toc_Hien_Tai === null) {
      this.toastr.error('Quý khách cần nhập đầy đủ số tình trạng tóc hiện tại');
    } else {
      const success = res => {
        this.toastr.success('Cảm ơn bạn đã quan tâm đến sản phẩm của chúng tôi');
        window.location.href = '/page/thankyou';
      };
      const error = res => {
        this.toastr.error('Có lỗi từ hệ thống liên hệ lại với quản trị viên');
      };
      this.httpClient.post(ApiService + `contact/tracking/${this.adsLinkId}/${contact}`, undefined).subscribe(success, error);
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      Ho_Va_Ten: undefined,
      So_Dien_Thoai: undefined,
      Tinh_Trang_Toc_Hien_Tai: undefined
    });
  }

  private listenRouter() {
    this.route.params.subscribe((data: Data) => {
      this.adsLinkId = data.id;
    });
  }

}

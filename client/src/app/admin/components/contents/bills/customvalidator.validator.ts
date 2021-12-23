import { FormGroup, AbstractControl } from '@angular/forms';

export function CompareChiSoDien(chisodau: string, chisocuoi: string) {
  return (formGroup: FormGroup) => {
    const sodau = formGroup.controls[chisodau];
    const socuoi = formGroup.controls[chisocuoi];
    if (sodau.value < socuoi.value) {
      return;
    }
    if (sodau.value > socuoi.value || sodau.value == socuoi.value) {
      return socuoi.setErrors({
        message: '*Chỉ số điện cuối phải lớn hơn chỉ số điện đầu',
      });
    }
  };
}
export function CompareChiSoNuoc(chisodau: string, chisocuoi: string) {
  return (formGroup: FormGroup) => {
    const sodau = formGroup.controls[chisodau];
    const socuoi = formGroup.controls[chisocuoi];

    if (sodau.value < socuoi.value) {
      return;
    }
    if (sodau.value > socuoi.value || sodau.value == socuoi.value) {
      return socuoi.setErrors({
        message: '*Chỉ số nước cuối phải lớn hơn chỉ số nước đầu',
      });
    }
  };
}

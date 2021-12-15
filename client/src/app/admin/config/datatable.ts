declare var $: any;
export function DataTable(tableId: any) {
  $(`#${tableId}`).DataTable({
    scrollX: true,
    language: {
      lengthMenu: 'Hiện thị _MENU_',
      zeroRecords: 'Không tìm thấy dữ liệu',
      info: 'Hiện thị trang _PAGE_ của _PAGES_',
      infoEmpty: '',
      infoFiltered: '',
      search: 'Tìm kiếm:',
      paginate: {
        previous: '<<',
        next: '>>',
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'zh-tw',
    plugins: ['dayGrid', 'timeGrid', 'list'],
    defaultView: 'dayGridMonth',
    header: {
      left: 'prevYear,prev,next,nextYear today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth custom1,custom2,custom3'
    },
    customButtons: {
      custom1: {
        text: '列印',
        click: function() {
          window.open('https://www.google.com/');
        }
      },
      custom2: {
        text: '匯出',
        click: function() {
          window.open('https://www.google.com/');
        }
      },
      custom3: {
        text: '增加',
        click: function() {
          // window.open('https://www.google.com/');
          var modal = UIkit.modal($("#add"), {
            center: true
          });
          // var modal = UIkit.modal("#add");
          if (modal.isActive()) {
            modal.hide();
          } else {
            modal.show();
          }
        }
      }
    },
    // events: 'https://fullcalendar.io/demo-events.json',
    events: [{
        title: 'All Day Event',
        url: 'https://www.google.com/',
        start: '2019-11-14',
        backgroundColor: '#ee7502'
      },
      {
        title: 'Long Event',
        start: '2019-11-20',
        end: '2019-11-22',
        backgroundColor: '#28a745'
      },
      {
        title: 'Event',
        start: '2019-11-23',
        end: '2019-11-25',
        backgroundColor: '#dc3545'
      },
      {
        title: 'Event',
        start: '2019-11-30',
      }
    ],
    eventClick: function(info) {
      info.jsEvent.preventDefault(); // don't let the browser navigate
      if (info.event.url) {
        window.open(info.event.url);
      }
    }
  });

  calendar.render();
});
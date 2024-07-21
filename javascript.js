$(document).ready(function(){
    //Toggle mobile navigation
    $('.mb_menu').click(function(){
        $('.nav_menu').toggleClass('active')
    });

    $(window).resize(function resize(){
        if ($(window).width() < 768) {
            $('.icon_bg > i').removeClass('fa-xl');
            $('.icon_bg > i').addClass('fa-lg');
        }
    });

    //Scroll button
    $('#slide_right').click(function() {
        event.preventDefault();
        $('#gallery').animate({
            scrollLeft: "+=295px"
        }, "slow");
    });

    $('#slide_left').click(function() {
        event.preventDefault();
        $('#gallery').animate({
            scrollLeft: "-=295px"
        }, "slow");
        
    });

    //Set rooms as default display in gallery
    $('.gallery_item').not('.rooms').hide('5000');
    $('.gallery_item').filter('.rooms').show('5000');

    //Filter gallery
    $('.select_btn').click(function(){
        const value = $(this).attr('data-filter');
        $('.gallery_item').not('.'+value).fadeOut().hide('1000');
        $('.gallery_item').filter('.'+value).show('1000',function(){
            $('#gallery').scrollLeft(0)});
        
    });
        
    //Add active class to select buttons
    $('.select_btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).children('.bar').addClass('active_bar');
        $(this).siblings().children('.bar').removeClass('active_bar');
    });  
});



  $(document).ready(function() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    
    let selectedDate = new Date();
    let selectedTime = '';

    function renderCalendar(date) {
      $('#currentMonth').text(`${monthNames[date.getMonth()]} ${date.getFullYear()}`);
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      
      let calendarBody = '';
      let day = firstDay.getDay();
      
      for (let i = 0; i < day; i++) {
        calendarBody += '<td></td>';
      }
      
      for (let i = 1; i <= lastDay.getDate(); i++) {
        calendarBody += `<td class="calendar-date">${i}</td>`;
        day++;
        if (day % 7 === 0) {
          calendarBody += '</tr><tr>';
        }
      }
      
      $('#calendarBody').html(`<tr>${calendarBody}</tr>`);
    }

    function renderTimeSlots() {
      const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
      let timeSlotsHtml = '';
      timeSlots.forEach(time => {
        timeSlotsHtml += `<button class="time-slot rounded-md py-1 px-3 m-1" data-time="${time}">${time}</button>`;
      });
      $('#timeSlots').html(timeSlotsHtml);
    }

    renderCalendar(selectedDate);
    renderTimeSlots();

    $('#prevMonth').click(function() {
      selectedDate.setMonth(selectedDate.getMonth() - 1);
      renderCalendar(selectedDate);
    });

    $('#nextMonth').click(function() {
      selectedDate.setMonth(selectedDate.getMonth() + 1);
      renderCalendar(selectedDate);
    });

    $(document).on('click', '.calendar-date', function() {
      $('.calendar-date').removeClass('bg-main-color text-white');
      $(this).addClass('bg-main-color text-white');
      selectedDate.setDate($(this).text());
    });

    $(document).on('click', '.time-slot', function() {
      $('.time-slot').removeClass('active');
      $(this).addClass('active');
      selectedTime = $(this).data('time');
    });

    $('#nextStep').click(function() {
      if (selectedDate && selectedTime) {
        $('#selectedDateTime').text(`Date: ${selectedDate.toDateString()}, Time: ${selectedTime}`);
        $('#bookingModal').addClass('hidden');
        $('#reviewModal').removeClass('hidden');
      } else {
        alert('Please select a date and time.');
      }
    });

    $('#requestAppointment').click(function() {
      const name = $('#fullName').val();
      const phone = $('#phoneNumber').val();
      const notes = $('#appointmentNotes').val();
      
      if (name) {
        alert('Appointment requested successfully.');
        $('#reviewModal').addClass('hidden');
      } else {
        alert('Please enter your name.');
      }
    });

    // Open Modal
    $('#openModalButton').click(function() {
      $('#bookingModal').removeClass('hidden');
    });

    // Close Modals
    $('#closeModalButton').click(function() {
      $('#bookingModal').addClass('hidden');
    });
    $('#closeReviewModalButton').click(function() {
      $('#reviewModal').addClass('hidden');
    });
  });


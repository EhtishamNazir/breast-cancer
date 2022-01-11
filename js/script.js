$(document).ready(function(){
		//Hide all question
		$('.questionaireForm').hide();
		$('#q1').show();
		$(".dots #q1-circle").addClass('active');
		$('#q1 #q1Conti').click(function(){
			$('.questionaireForm').hide();
			$('#q2').show();
			$('.dots #q1-circle').removeClass('active');
			$(".dots #q2-circle").addClass('active');
			return false;

		});
		
		$('#q2 #q2Conti').click(function(){
			$('.questionaireForm').hide();
			$('#q3').show();
			$('.dots #q2-circle').removeClass('active');
			$(".dots #q3-circle").addClass('active');
			return false;
		});
		
		$('#q3 #q3Conti').click(function(){
			$('.questionaireForm').hide();
			$('#q4').show();
			$('.dots #q3-circle').removeClass('active');
			$(".dots #q4-circle").addClass('active');
			return false;
		});

		$('#q4 #q4Conti').click(function(){
			$('.questionaireForm').hide();
			$('#q5').show();
			$('.dots #q4-circle').removeClass('active');
			$(".dots #q5-circle").addClass('active');
			return false;
		});

		$('#q5 #q5Conti').click(function(){
			$('.questionaireForm').hide();
			$('#q6').show();
			$('.dots #q5-circle').removeClass('active');
			$(".dots #q6-circle").addClass('active');
			return false;
		});

		$('#q6 #q6Conti').click(function(){
			$('.questionaireForm').hide();
			$('#q7').show();
			$('.dots #q6-circle').removeClass('active');
			$(".dots #q7-circle").addClass('active');
			return false;
		});
		
		$('#q6 #q6Conti').click(function(){
			$('.questionaireForm').hide();
			$('#q7').show();
			return false;
		});

		/* $('#q1 #q1Back').click(function(){
			$('.questionaireForm').hide();
			$('#q1').show();
			return false;
		}); */

		$('#q2 #q2Back').click(function(){
			$('.questionaireForm').hide();
			$('#q1').show();
			$('.dots #q2-circle').removeClass('active');
			$(".dots #q1-circle").addClass('active');
			return false;
		});

		$('#q3 #q3Back').click(function(){
			$('.questionaireForm').hide();
			$('#q2').show();
			$('.dots #q3-circle').removeClass('active');
			$(".dots #q2-circle").addClass('active');
			return false;
		});

		$('#q4 #q4Back').click(function(){
			$('.questionaireForm').hide();
			$('#q3').show();
			$('.dots #q4-circle').removeClass('active');
			$(".dots #q3-circle").addClass('active');
			return false;
		});

		$('#q5 #q5Back').click(function(){
			$('.questionaireForm').hide();
			$('#q4').show();
			$('.dots #q5-circle').removeClass('active');
			$(".dots #q4-circle").addClass('active');
			return false;
		});

		$('#q6 #q6Back').click(function(){
			$('.questionaireForm').hide();
			$('#q5').show();
			$('.dots #q6-circle').removeClass('active');
			$(".dots #q5-circle").addClass('active');
			return false;
		});

		$('#q7 #q7Back').click(function(){
			$('.questionaireForm').hide();
			$('#q6').show();
			$('.dots #q7-circle').removeClass('active');
			$(".dots #q6-circle").addClass('active');
			return false;
		});
		$('.dots #q1-circle').click(function(){
			$('.active').removeClass('active');
  			$(this).addClass('active');
			$('.questionaireForm').hide();
			$('#q1').show();
			return false;

		});
		$('.dots #q2-circle').click(function(){
			$('.active').removeClass('active');
  			$(this).addClass('active');
			$('.questionaireForm').hide();
			$('#q2').show();
			return false;

		});
		$('.dots #q3-circle').click(function(){
			$('.active').removeClass('active');
  			$(this).addClass('active');
			$('.questionaireForm').hide();
			$('#q3').show();
			return false;

		});
		$('.dots #q4-circle').click(function(){
			$('.active').removeClass('active');
  			$(this).addClass('active');
			$('.questionaireForm').hide();
			$('#q4').show();
			return false;

		});
		$('.dots #q5-circle').click(function(){
			$('.active').removeClass('active');
  			$(this).addClass('active');
			$('.questionaireForm').hide();
			$('#q5').show();
			return false;

		});
		$('.dots #q6-circle').click(function(){
			$('.active').removeClass('active');
  			$(this).addClass('active');
			$('.questionaireForm').hide();
			$('#q6').show();
			return false;

		});
		$('.dots #q7-circle').click(function(){
			$('.active').removeClass('active');
  			$(this).addClass('active');
			$('.questionaireForm').hide();
			$('#q7').show();
			return false;

		});
		
	});
function goToEvaluation() {
      window.location.href = "evaluation.html";
    }  
function goToIndex() {
      window.location.href = "index.html";
    }   
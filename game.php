<?php
include 'pageTemplate/header.php';
?>
<script type="text/javascript">
	databaseRow = <?php include 'ajax/sendCurrentPlayer.php';?>;
</script>
	<div class="container">
		<div class="row marketing">
			<div class="col-lg-6" id="left">
				<div class="col-lg-8" id="playerTable">
				</div>
				<div class="col-lg-4" id="playerSettings">
				</div>
			</div>
			<div class="col-lg-6" id="right">
				
			</div>
		</div>
	</div>

<?php
include 'pageTemplate/footer.php';
?> 

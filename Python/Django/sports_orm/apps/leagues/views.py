from django.shortcuts import render, redirect
from .models import League, Team, Player

from . import team_maker

def index(request):
    # 3.
	# teams = Team.objects.filter(league = League.objects.get(name="International Collegiate Baseball Conference"))
	# icbc = []
	# for team in teams:
	# 	for players in team.curr_players.all():
	# 		icbc.append(players)

	# 4.
	# teams = Team.objects.filter(league = League.objects.get(name="American Conference of Amateur Football"))
	# acaf = []
	# for team in teams:
	# 	for players in team.curr_players.filter(last_name='Lopez'):
	# 		acaf.append(players)

	# 5.
	# teams = Team.objects.filter(league = League.objects.filter(sport='Football'))
	# football = []
	# for team in teams:
	# 	for players in team.curr_players.all():
	# 		football.append(players)

	#6.
	teams = Team.objects.all()
	sophia = []
	for team in teams:
		if team.curr_players.filter(first_name='Sophia'):
			sophia.append(team)


	context = {
		# "baseball": League.objects.filter(sport='Baseball'),
		# "women": League.objects.filter(name__contains='Womens'),
		# "hockey": League.objects.filter(sport__contains='Hockey'),
		# "football": League.objects.exclude(sport='Football'),
		# "conferences": League.objects.filter(name__contains='conference'),
		# "atlantic": League.objects.filter(name__contains='Atlantic'),
		# 'dallas': Team.objects.filter(location='Dallas'),
		# 'raptors': Team.objects.filter(team_name__contains='Raptor'),
		# 'city': Team.objects.filter(location__contains='City'),
		# 't': Team.objects.filter(team_name__startswith='T'),
		# 'ordered': Team.objects.order_by('location'),
		# 'reve': Team.objects.order_by('location').reverse(),
		# 'cooper': Player.objects.filter(last_name='Cooper'),
		# 'josh': Player.objects.filter(first_name='Joshua'),
		# 'coopjosh': Player.objects.filter(last_name='Cooper').exclude(first_name='Joshua'),
		# 'alexwyatt': Player.objects.filter(first_name='Alexander')|Player.objects.filter(first_name='Wyatt'),
		# "atlanticconf": Team.objects.filter(league=League.objects.get(name='Atlantic Soccer Conference')),
		# "penguins": Player.objects.filter(curr_team=Team.objects.get(team_name='Penguins', location='Boston')),
		# 'icbc': icbc,
		# "acaf": acaf,
		# "football": football,
		"sophia": sophia,
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all()
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
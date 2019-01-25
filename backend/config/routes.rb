Rails.application.routes.draw do
	root 'application#index'
	get 'api/quizlist/' => 'application#index'
	get "api/quizres", to: 'application#quizres' 
	get "api/quizques", to: 'application#quizques'
	#get 'quizans/:id' => 'application#quizans'
end

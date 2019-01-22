Rails.application.routes.draw do
	root 'application#index'
	get 'index' => 'application#index'
	get "quizans", to: 'application#quizans' 
	get "quizques", to: 'application#quizques'
	#get 'quizans/:id' => 'application#quizans'
end

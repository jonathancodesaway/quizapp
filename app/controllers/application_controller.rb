class ApplicationController < ActionController::Base
	def index
		#conn = PG.connect(dbname: 'postgres')
		#conn = PG.connect(dbname: 'quizans1')
		temp = ActiveRecord::Base.connection.execute("select * from quizlist")
		#temp = "{ 'which disney princess?' : 'Are you?'}"
		render json: temp
	end

	def quizans
		id = params[:id]
		puts id
		temp = ActiveRecord::Base.connection.execute("select * from quizans#{id}")
		render json: temp
	end

	def quizques
		id = params[:id]
		puts id
		temp = ActiveRecord::Base.connection.execute("select * from quizques#{id}")
		render json: temp
	end

end

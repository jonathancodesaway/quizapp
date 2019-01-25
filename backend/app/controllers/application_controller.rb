class ApplicationController < ActionController::Base
	def index
		#conn = PG.connect(dbname: 'postgres')
		#conn = PG.connect(dbname: 'quizans1')
		temp = ActiveRecord::Base.connection.execute("select * from quizlist")
		#temp = "{ 'which disney princess?' : 'Are you?'}"
		render json: temp
	end

	def quizres
		id = params[:id]
		if /[0-9]/.match(id)
			puts id
			temp = ActiveRecord::Base.connection.execute("select * from quizres#{id}")
			render json: temp
		end
	end

	def quizques
		id = params[:id]
		if /[0-9]/.match(id)
			puts id
			temp = ActiveRecord::Base.connection.execute("select * from quizques#{id}")
			render json: temp
		end
	end

end

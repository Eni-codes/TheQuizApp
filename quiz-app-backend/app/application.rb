class Application

    def call(env)
        resp = Rack::Response.new
        req = Rack::Request.new(env)

    if req.path.match(/test/) 
        return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]

    elsif req.path.match(/quiz/) && req.get?
        question_json = Question.all.to_json(:include => { :answer_category => {
                                             :include => :incorrect_answers
                                             } })
        return [200, { 'Content-Type' => 'application/json' }, [ question_json ]]
        
    elsif req.path.match(/submit/) && req.get?
        return [200, { 'Content-Type' => 'application/json' }, [ Question.all.to_json ]]

    elsif req.path.match(/result/) && req.get?
        return [200, { 'Content-Type' => 'application/json' }, [ Choice.all.to_json ]]

    else
        resp.write "Path Not Found"

    end

        resp.finish
    end

end

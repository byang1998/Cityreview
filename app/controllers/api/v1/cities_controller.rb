module Api
    module V1
        class CitiesController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                cities = City.all

                render json: CitySerializer.new(cities, options).serialized_json
            end

            def show
                city = City.find_by(slug: params[:slug])

                render json: CitySerializer.new(city, options).serialized_json
            end

            def create
                city = City.new(city_params)

                if city.save
                    render json: CitySerializer.new(city).serialized_json
                else 
                    render json: { error: city.errors.messages }, status: 422
                end
            end

            def update 
                city = City.find_by(slug: params[:slug])

                if city.update(city_params)
                    render json: CitySerializer.new(city, options).serialized_json
                else 
                    render json: { error: city.errors.messages }, status: 422
                end
            end

            def destroy
                city = City.find_by(slug: params[:slug])

                if city.destroy 
                    head :no_content
                else 
                    render json: { error: city.errors.messages }, status: 422
                end
            end

            private 
            
            def city_params
                params.require(:city).permit(:name, :image_url)
            end

            def options 
                @options ||= { include: %i[reviews] }
            end
        end
    end 
end 
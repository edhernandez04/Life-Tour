class ToursController < ApplicationController

    def index
      tours = Tour.all
      render json: tours
    end
  
    def create
      tour = Tour.new(
        title: params[:title],
        summary: params[:summary],
        tour_pic: params[:tour_pic],
        user_id: params[:user_id]
      )
      if tour.save
        render json: {tour: tour}
      else
        render json: {errors: tour.errors.full_messages}
      end
    end
  
    def show
      tour = Tour.all.find do |tour|
        tour.id === params[:id]
      end
    end
  
    def update
      tour = Tour.find(params[:id])
      tour.update(tour_params) 
  
      render json: tour
    end
  
    def destroy
      tour = Tour.find(params[:id])
      tour.destroy
    end
  
    private
    def tour_params
      params.require(:tour).permit(:title, :summary, :tour_pic, :user_id)
    end
  
  end
  
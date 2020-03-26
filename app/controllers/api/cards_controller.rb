class Api::CardsController < ApplicationController
  def index
    category= Category.find(params[:category_id])
    render json: category.cards
  end

  def show
  end

  def create
    category = Category.find(params[:category_id])
    card = category.cards.new(card_params)
    render json: category.cards.create(card_params)
  end

  def update
  end

  def destroy
    Card.find(params[:id]).destroy
  end

  private 
  def card_params
    params.require(:card).permit(:name)
  end
end
